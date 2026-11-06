import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  college: z.string().trim().max(200),
  role: z.enum(["AI Engineering Intern", "Generative AI Intern", "Agentic AI Intern", "Full Stack Engineering Intern", "Frontend Engineering Intern", "Backend Engineering Intern", "AI Research Intern", "Product Design Intern"]),
  portfolio: z.union([z.literal(""), z.string().url().max(500).refine(value => /^https?:\/\//i.test(value))]),
  about: z.string().trim().max(3000),
});

const respond = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

// Public application intake: visitors can submit, never read applications or files.
Deno.serve(async request => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return respond({ error: "Method not allowed" }, 405);
  if (Number(request.headers.get("content-length")) > 6 * 1024 * 1024) return respond({ error: "Application is too large." }, 413);
  try {
    const form = await request.formData();
    if (form.get("website")) return respond({ error: "Unable to accept application." }, 400);
    const parsed = schema.safeParse(Object.fromEntries(["name", "email", "college", "role", "portfolio", "about"].map(key => [key, form.get(key) ?? ""])));
    if (!parsed.success) return respond({ error: "Please check your application details." }, 400);
    const resume = form.get("resume");
    let bytes: Uint8Array | undefined;
    if (resume instanceof File && resume.size > 0) {
      if (resume.size > 5 * 1024 * 1024 || !resume.name.toLowerCase().endsWith(".pdf")) return respond({ error: "Upload a PDF résumé up to 5 MB." }, 400);
      bytes = new Uint8Array(await resume.arrayBuffer());
      if (new TextDecoder().decode(bytes.slice(0, 5)) !== "%PDF-") return respond({ error: "The résumé must be a valid PDF." }, 400);
    }
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return respond({ error: "Applications are temporarily unavailable." }, 503);
    const client = createClient(url, key);
    const id = crypto.randomUUID();
    const path = bytes ? `${id}/resume.pdf` : null;
    if (bytes && path) {
      const { error } = await client.storage.from("internship-resumes").upload(path, bytes, { contentType: "application/pdf", upsert: false });
      if (error) return respond({ error: "Your résumé could not be saved. Please try again." }, 500);
    }
    const { error } = await client.from("internship_applications").insert({ id, ...parsed.data, resume_path: path, resume_name: resume instanceof File && bytes ? resume.name.slice(0, 200) : null });
    if (error) {
      if (path) await client.storage.from("internship-resumes").remove([path]);
      return respond({ error: "Your application could not be saved. Please try again." }, 500);
    }
    return respond({ success: true, id });
  } catch {
    return respond({ error: "Unable to submit this application. Please try again." }, 400);
  }
});