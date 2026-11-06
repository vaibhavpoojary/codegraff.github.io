import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

async function submit(resume: File) {
  const base = Deno.env.get("SUPABASE_URL");
  if (!base) throw new Error("Cloud URL missing");
  const form = new FormData();
  form.set("name", "Validation test");
  form.set("email", "validation@example.invalid");
  form.set("role", "AI Engineering Intern");
  form.set("resume", resume);
  return fetch(`${base}/functions/v1/submit-internship`, { method: "POST", body: form });
}

Deno.test("Reject files that are not valid PDFs", async () => {
  const response = await submit(new File(["not a pdf"], "resume.pdf", { type: "application/pdf" }));
  assertEquals(response.status, 400);
  assertEquals((await response.json()).error, "The résumé must be a valid PDF.");
});

Deno.test("Reject resumes over 5 MB", async () => {
  const response = await submit(new File([new Uint8Array(5 * 1024 * 1024 + 1)], "resume.pdf", { type: "application/pdf" }));
  assertEquals(response.status, 400);
  assertEquals((await response.json()).error, "Upload a PDF résumé up to 5 MB.");
});