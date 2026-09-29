import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { approvedTestimonials } from "@/data/testimonials";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(5000),
});


export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const parsed = contactSchema.safeParse({ fullName, email, message });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check your inputs");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("notify-contact", {
        body: {
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          message: parsed.data.message,
        },
      });

      if (error) {
        console.error("[contact] notify failed", error);
        toast.error("Can't send message now, try again");
        return;
      }

      setSubmitted(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">

        {/* Testimonials: only people who approved their wording are shown (src/data/testimonials.ts) */}
        {approvedTestimonials.length > 0 && (
          <section aria-labelledby="testimonials-title">
            <h2 id="testimonials-title" className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
              What people I've worked with say
            </h2>
            <div className="testimonial-marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <div className="testimonial-track flex w-max gap-3 py-1">
                {[...approvedTestimonials, ...approvedTestimonials].map((t, i) => (
                  <figure
                    key={`${t.name}-${i}`}
                    aria-hidden={i >= approvedTestimonials.length}
                    className="flex w-[300px] flex-shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-5"
                  >
                    <blockquote className="text-[13px] leading-6 text-foreground/90">"{t.quote}"</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                        style={{ backgroundColor: t.accent }}
                      >
                        {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium text-foreground">
                          {t.linkedin ? (
                            <a href={t.linkedin} target="_blank" rel="noopener" className="hover:underline">{t.name}</a>
                          ) : (
                            t.name
                          )}
                        </span>
                        <span className="block text-xs text-muted-foreground">{t.role}, {t.company}</span>
                        <span className="block text-xs text-muted-foreground/80">{t.relationship}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Card */}
        <section>
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card px-6 py-8 text-center">
              <p className="text-lg font-semibold text-foreground">Message Sent!</p>
              <p className="mt-2 text-[12px] text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[12px] text-muted-foreground underline hover:text-foreground transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-[hsl(var(--accent-gold)/0.3)] bg-card p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Contact Me!</h2>
                <p className="mt-1 text-[13px] text-muted-foreground">The start of something magnificent</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Type here..."
                    required
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">Your Message For Me?</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You can say all you want here..."
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-foreground outline-none placeholder:text-muted-foreground/40 focus:border-muted-foreground/40 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl font-medium text-sm text-foreground transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(90deg, hsl(30 80% 65%), hsl(340 60% 65%), hsl(260 70% 65%))",
                  }}
                >
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-2">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4">
              {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/60">Adedamola Ade — Product Designer</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
