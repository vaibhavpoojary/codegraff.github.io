import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface Field { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; options?: string[]; required?: boolean; full?: boolean }

const DemoForm = ({ fields, submit, success }: { fields: Field[]; submit: string; success: string }) => {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setDone(true); }, 900); };
  if (done) return (
    <div className="card-soft p-10 text-center animate-scale-in">
      <CheckCircle2 className="w-12 h-12 text-success mx-auto" />
      <p className="h3 mt-5">Thank you.</p>
      <p className="text-muted-foreground mt-2">{success}</p>
      <Button variant="outline" className="rounded-full mt-6" onClick={() => setDone(false)}>Send another</Button>
    </div>
  );
  return (
    <form onSubmit={onSubmit} className="card-soft p-6 md:p-10 grid sm:grid-cols-2 gap-5">
      {fields.map(f => (
        <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2 space-y-2" : "space-y-2"}>
          <Label htmlFor={f.name}>{f.label}{f.required && <span className="text-primary"> *</span>}</Label>
          {f.type === "textarea" ? <Textarea id={f.name} name={f.name} required={f.required} rows={5} className="rounded-xl" />
            : f.type === "select" ? (
              <select id={f.name} name={f.name} required={f.required} className="flex h-10 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select…</option>{f.options?.map(o => <option key={o}>{o}</option>)}
              </select>
            ) : <Input id={f.name} name={f.name} type={f.type ?? "text"} required={f.required} className="rounded-xl h-10" />}
        </div>
      ))}
      <div className="sm:col-span-2"><Button type="submit" size="lg" disabled={loading} className="rounded-full h-12 px-8 w-full sm:w-auto">{loading ? "Sending…" : submit}</Button></div>
    </form>
  );
};

export default DemoForm;
