import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import "./IntelligenceLoom.css";

const STAGES = [
  { name: "Understand", title: "Find the signal.", detail: "Your context. Connected and understood.", label: "CONTEXT → CLARITY" },
  { name: "Engineer", title: "Give intelligence shape.", detail: "Ideas woven into systems that reason.", label: "CLARITY → INTELLIGENCE" },
  { name: "Deliver", title: "Make possibility work.", detail: "Intelligence built into real software.", label: "INTELLIGENCE → IMPACT" },
];

const STRANDS = 36;
const SAMPLES = 100;
const CYCLE_MS = 8000;
const TAU = Math.PI * 2;
type Point = { x: number; y: number; z: number };
type ProjectedPoint = Point & { scale: number };

// One continuous material, reshaped into signals, a woven sculpture, and code.
function shape(stage: number, u: number, v: number, time: number): Point {
  if (stage === 0) {
    const envelope = Math.sin(u * Math.PI);
    return {
      x: (u - 0.5) * 390,
      y: v * 165 + Math.sin(u * TAU * 1.1 + v * 2.5 + time * 0.5) * 43 * envelope,
      z: Math.cos(u * TAU + v * 3 + time * 0.35) * 55 * envelope,
    };
  }

  if (stage === 1) {
    const twist = u * TAU * 1.18 + time * 0.17;
    const breadth = 79 + Math.sin(u * Math.PI) * 22;
    return {
      x: Math.sin(u * TAU - 0.5) * 65 + v * breadth * Math.cos(twist),
      y: (u - 0.5) * 325 + v * 18 * Math.sin(twist),
      z: Math.cos(u * TAU - 0.5) * 27 + v * breadth * Math.sin(twist),
    };
  }

  const group = v < -0.32 ? 0 : v > 0.32 ? 2 : 1;
  const local = group === 0 ? (v + 0.66) * 3 : group === 2 ? (v - 0.66) * 3 : v * 3;
  const bend = 1 - Math.abs(u * 2 - 1);
  return {
    x: group === 0 ? -87 - bend * 76 : group === 2 ? 87 + bend * 76 : 38 - u * 76,
    y: (u - 0.5) * (group === 1 ? 230 : 165) + local * 13,
    z: local * 24 + Math.sin(u * Math.PI) * 12,
  };
}

const IntelligenceLoom = () => {
  const titleId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const redrawRef = useRef<() => void>(() => undefined);
  const runtime = useRef({ stage: 1, paused: false, reduced: false, elapsed: 0 });
  const [activeStage, setActiveStage] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !root || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let time = 0;
    let visible = false;
    let disposed = false;
    const pointer = { x: 0, y: 0 };
    const rotation = { x: 0, y: 0 };
    const weights = [0, 1, 0];
    // Reuse the projection buffer rather than allocate it on every frame.
    const strands: ProjectedPoint[][] = Array.from({ length: STRANDS }, () =>
      Array.from({ length: SAMPLES }, () => ({ x: 0, y: 0, z: 0, scale: 1 })),
    );

    const schedule = () => {
      if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const draw = (now: number) => {
      frame = 0;
      if (!width || !height) return;
      const state = runtime.current;
      const still = state.paused || state.reduced;
      const delta = lastTime ? Math.min(now - lastTime, 48) : 16;
      lastTime = now;

      if (!still) {
        time += delta * 0.001;
        state.elapsed += delta;
        if (state.elapsed >= CYCLE_MS) {
          state.elapsed = 0;
          state.stage = (state.stage + 1) % STAGES.length;
          setActiveStage(state.stage);
        }
      }
      root.style.setProperty("--loom-progress", `${(state.elapsed / CYCLE_MS) * 100}%`);

      const blend = 1 - Math.exp(-delta / 650);
      for (let i = 0; i < weights.length; i++) {
        const target = i === state.stage ? 1 : 0;
        weights[i] = still ? target : weights[i] + (target - weights[i]) * blend;
      }
      rotation.x += ((still ? 0 : pointer.x) - rotation.x) * blend;
      rotation.y += ((still ? 0 : pointer.y) - rotation.y) * blend;

      context.clearRect(0, 0, width, height);
      const unit = Math.min(width / 490, height / 460);
      const yaw = -0.13 + rotation.x * 0.2 + (still ? 0 : Math.sin(time * 0.22) * 0.06);
      const pitch = -0.08 + rotation.y * 0.13;
      const roll = -0.2 * weights[1];
      const cosYaw = Math.cos(yaw), sinYaw = Math.sin(yaw);
      const cosPitch = Math.cos(pitch), sinPitch = Math.sin(pitch);
      const cosRoll = Math.cos(roll), sinRoll = Math.sin(roll);

      const project = (x: number, y: number, z: number, point: ProjectedPoint) => {
        const rx = x * cosYaw + z * sinYaw;
        const rz = z * cosYaw - x * sinYaw;
        const ry = y * cosPitch - rz * sinPitch;
        const depth = y * sinPitch + rz * cosPitch;
        const perspective = 650 / (650 - depth);
        point.x = width / 2 + (rx * cosRoll - ry * sinRoll) * unit * perspective;
        point.y = height / 2 + (rx * sinRoll + ry * cosRoll) * unit * perspective;
        point.z = depth;
        point.scale = perspective;
      };

      for (let s = 0; s < STRANDS; s++) {
        const v = (s / (STRANDS - 1)) * 2 - 1;
        for (let p = 0; p < SAMPLES; p++) {
          const u = p / (SAMPLES - 1);
          let x = 0, y = 0, z = 0;
          for (let stage = 0; stage < weights.length; stage++) {
            if (weights[stage] < 0.001) continue;
            const point = shape(stage, u, v, time);
            x += point.x * weights[stage];
            y += point.y * weights[stage];
            z += point.z * weights[stage];
          }
          project(x, y, z, strands[s][p]);
        }
      }

      context.globalCompositeOperation = "lighter";
      const trace = (points: ProjectedPoint[], start = 0, end = points.length) => {
        context.beginPath();
        context.moveTo(points[start].x, points[start].y);
        for (let p = start + 1; p < end; p++) context.lineTo(points[p].x, points[p].y);
      };

      // A broad, quiet bloom sits underneath the sharply drawn woven threads.
      for (let s = 0; s < STRANDS; s += 5) {
        trace(strands[s]);
        context.strokeStyle = "rgba(25, 100, 255, 0.055)";
        context.lineWidth = 13 * unit;
        context.stroke();
      }

      for (let s = 0; s < STRANDS; s++) {
        const points = strands[s];
        const color = context.createLinearGradient(0, height * 0.12, width * 0.8, height * 0.85);
        color.addColorStop(0, "rgba(151, 218, 255, 0.82)");
        color.addColorStop(0.32, "rgba(58, 156, 255, 0.76)");
        color.addColorStop(0.67, "rgba(53, 92, 244, 0.63)");
        color.addColorStop(1, "rgba(153, 129, 255, 0.8)");
        trace(points);
        context.strokeStyle = color;
        context.lineWidth = (s % 6 === 0 ? 1.05 : 0.6) * unit;
        context.stroke();

        // Short highlights travel along the actual surface, never around an orbit.
        const head = ((time * 0.085 + s * 0.027) % 1) * (SAMPLES - 13);
        const start = Math.floor(head);
        trace(points, start, start + 12);
        context.strokeStyle = s % 3 === 0 ? "rgba(179, 226, 255, 0.9)" : "rgba(96, 161, 255, 0.6)";
        context.lineWidth = 1.25 * unit;
        context.stroke();

        for (let p = 0; p < SAMPLES; p += 7) {
          const point = points[p];
          const shimmer = 0.35 + (Math.sin(p * 0.6 + s * 0.7 - time * 1.7) + 1) * 0.2;
          context.fillStyle = `rgba(154, 204, 255, ${shimmer})`;
          const size = (s % 4 === 0 ? 1.25 : 0.8) * unit * point.scale;
          context.fillRect(point.x - size / 2, point.y - size / 2, size, size);
        }
      }

      // Cross threads reveal the changing surface and give it physical depth.
      context.lineWidth = 0.5 * unit;
      for (let p = 0; p < SAMPLES; p += 5) {
        for (let s = 0; s < STRANDS - 1; s++) {
          // Keep the three code strokes separated as the last form resolves.
          if (weights[2] > 0.4 && (s === 11 || s === 23)) continue;
          const a = strands[s][p], b = strands[s + 1][p];
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(111, 170, 255, ${0.1 + ((a.z + 130) / 260) * 0.16})`;
          context.stroke();
        }
      }
      context.globalCompositeOperation = "source-over";
      if (!still) schedule();
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    };

    const motionChange = () => {
      runtime.current.reduced = motionQuery.matches;
      setReducedMotion(motionQuery.matches);
      lastTime = 0;
      schedule();
    };

    const visibilityChange = () => {
      lastTime = 0;
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    };

    const pointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || runtime.current.reduced || runtime.current.paused) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const pointerLeave = () => { pointer.x = 0; pointer.y = 0; };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      lastTime = 0;
      if (visible) schedule();
      else { cancelAnimationFrame(frame); frame = 0; }
    }, { threshold: 0.05 });

    redrawRef.current = schedule;
    motionChange();
    resizeObserver.observe(canvas);
    intersectionObserver.observe(root);
    motionQuery.addEventListener("change", motionChange);
    document.addEventListener("visibilitychange", visibilityChange);
    canvas.addEventListener("pointermove", pointerMove);
    canvas.addEventListener("pointerleave", pointerLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener("change", motionChange);
      document.removeEventListener("visibilitychange", visibilityChange);
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("pointerleave", pointerLeave);
      redrawRef.current = () => undefined;
    };
  }, []);

  const selectStage = (index: number) => {
    runtime.current.stage = index;
    runtime.current.elapsed = 0;
    setActiveStage(index);
    redrawRef.current();
  };

  const togglePause = () => {
    runtime.current.paused = !runtime.current.paused;
    setPaused(runtime.current.paused);
    redrawRef.current();
  };

  return (
    <section ref={rootRef} className="intelligence-loom" aria-labelledby={titleId}>
      <div className="loom-topline">
        <span className="loom-wordmark"><span aria-hidden="true">[h/l]</span> INTELLIGENCE LOOM</span>
        <span className="loom-status"><span />{reducedMotion ? "STILL STUDY" : paused ? "PAUSED" : "IN MOTION"}</span>
      </div>

      <div className="loom-stage">
        <div className="loom-ambient" aria-hidden="true" />
        <div className="loom-coordinate loom-coordinate-top" aria-hidden="true">HL—0{activeStage + 1}</div>
        <div className="loom-coordinate loom-coordinate-side" aria-hidden="true">IDEAS INTO REALITY</div>
        <canvas
          ref={canvasRef}
          className="loom-canvas"
          role="img"
          aria-label={`${STAGES[activeStage].name}: blue luminous threads form ${["flowing signals", "a sculptural woven ribbon", "software code brackets"][activeStage]}.`}
        />
        <div className="loom-stage-baseline" aria-hidden="true"><span />{STAGES[activeStage].label}<span /></div>
      </div>

      <div className="loom-caption">
        <div>
          <h2 id={titleId}>{STAGES[activeStage].title}</h2>
          <p>{STAGES[activeStage].detail}</p>
        </div>
        <ArrowUpRight className="loom-caption-arrow" aria-hidden="true" size={25} strokeWidth={1} />
      </div>

      <div className="loom-controls">
        <div className="loom-steps" role="group" aria-label="Explore the intelligence stages">
          {STAGES.map((stage, index) => (
            <button key={stage.name} type="button" className="loom-step" aria-pressed={activeStage === index} onClick={() => selectStage(index)}>
              <span className="loom-step-number">0{index + 1}</span>
              <span>{stage.name}</span>
              <span className="loom-step-track" aria-hidden="true"><span /></span>
            </button>
          ))}
        </div>
        <button type="button" className="loom-playback" onClick={togglePause} disabled={reducedMotion} aria-label={reducedMotion ? "Animation disabled by reduced motion preference" : paused ? "Play animation" : "Pause animation"} title={reducedMotion ? "Reduced motion enabled" : paused ? "Play animation" : "Pause animation"}>
          {paused || reducedMotion ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
};

export default IntelligenceLoom;
