import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { internshipRoles } from "@/data/internships";

const schema = z.object({ name: z.string().trim().min(1).max(100), email: z.string().trim().email().max(255), college: z.string().max(200), role: z.string().refine(value => internshipRoles.includes(value)), portfolio: z.union([z.literal(""), z.string().url().max(500).refine(value => /^https?:\/\//i.test(value))]), about: z.string().max(3000) });

const InternshipForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!schema.safeParse(Object.fromEntries(form)).success) { setError("Check your details and use a full http or https portfolio link."); return; }
    if (file) form.set("resume", file);
    setSending(true); setError("");
    try {
      const { data, error: requestError } = await supabase.functions.invoke("submit-internship", { body: form });
      if (requestError || !data?.success) throw new Error(data?.error ?? "Your application was not saved. Please try again.");
      setDone(true);
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please try again."); }
    finally { setSending(false); }
  };
  if (done) return <div className="py-10" role="status"><CheckCircle2 className="h-10 w-10 text-primary" /><h3 className="mt-4 text-2xl font-semibold">Application received.</h3><p className="mt-3 text-muted-foreground">Your details{file ? " and résumé have" : " have"} been saved for review.</p><Button variant="outline" className="mt-6" onClick={() => { setDone(false); setFile(null); }}>Submit another application</Button></div>;
  return <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
    <div className="space-y-2"><Label htmlFor="name">Name *</Label><Input id="name" name="name" required maxLength={100} autoComplete="name" /></div>
    <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" /></div>
    <div className="space-y-2"><Label htmlFor="college">College / University</Label><Input id="college" name="college" maxLength={200} /></div>
    <div className="min-w-0 space-y-2"><Label htmlFor="role">Internship track *</Label><select id="role" name="role" required className="h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="">Select a track</option>{internshipRoles.map(role => <option key={role}>{role}</option>)}</select></div>
    <div className="space-y-2 sm:col-span-2"><Label htmlFor="portfolio">GitHub / Portfolio link</Label><Input id="portfolio" name="portfolio" type="url" placeholder="https://" maxLength={500} /></div>
    <div className="space-y-2 sm:col-span-2"><Label htmlFor="about">Tell us what you'd like to build</Label><Textarea id="about" name="about" rows={4} maxLength={3000} /></div>
    <div className="space-y-3 sm:col-span-2">
      <Label htmlFor="resume">Résumé <span className="font-normal text-muted-foreground">(optional)</span></Label>
      <input ref={inputRef} id="resume" type="file" accept=".pdf,application/pdf" className="sr-only" onChange={event => { const selected = event.target.files?.[0]; setError(""); if (!selected) return; if (!selected.name.toLowerCase().endsWith(".pdf") || selected.size > 5 * 1024 * 1024) { setError("Choose a PDF résumé up to 5 MB."); event.target.value = ""; return; } setFile(selected); }} />
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-dashed border-input p-4">
        <div className="flex min-w-0 flex-1 items-center gap-3"><FileText className="h-5 w-5 shrink-0 text-primary" /><div className="min-w-0"><p className="break-all text-sm font-medium">{file?.name ?? "PDF résumé"}</p><p className="mt-1 text-xs text-muted-foreground">{file ? `${(file.size / 1024).toFixed(0)} KB` : "Up to 5 MB · stored privately"}</p></div></div>
        <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}><Upload />{file ? "Replace" : "Upload résumé"}</Button>
        {file && <Button type="button" variant="ghost" size="icon" aria-label="Remove résumé" onClick={() => { setFile(null); if (inputRef.current) inputRef.current.value = ""; }}><X /></Button>}
      </div>
    </div>
    <div className="hidden" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
    {error && <p className="text-sm text-destructive sm:col-span-2" role="alert">{error}</p>}
    <div className="sm:col-span-2"><Button type="submit" disabled={sending} className="h-11 w-full sm:w-auto">{sending && <Loader2 className="animate-spin" />}{sending ? "Submitting…" : "Submit application"}</Button></div>
  </form>;
};

export default InternshipForm;