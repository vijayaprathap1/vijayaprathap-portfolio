import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "sent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
  }

  function validate(values: { name: string; email: string; message: string }) {
    const next: Record<string, string> = {};
    if (!values.name) next.name = "Name is required.";
    if (!values.email) next.email = "Email is required.";
    else if (!EMAIL_RE.test(values.email)) next.email = "That email looks off.";
    if (values.message.length < 12) next.message = "Give me 12+ characters of context.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = readForm(event.currentTarget);
    setName(values.name);
    setEmail(values.email);
    setMessage(values.message);
    if (!validate(values)) return;
    setStatus("submitting");
    const payload = { ...values, at: new Date().toISOString() };
    try {
      const raw = localStorage.getItem("vp-inquiries");
      const existing: unknown[] = raw ? (JSON.parse(raw) as unknown[]) : [];
      existing.push(payload);
      localStorage.setItem("vp-inquiries", JSON.stringify(existing));
    } catch {
      /* private mode */
    }
    window.setTimeout(() => {
      setStatus("sent");
      toast.success("Received. I’ll write back.");
    }, 420);
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-wide border-t border-border pt-8">
        <p className="kicker text-fg">04 — Contact</p>
        <h2 className="mt-4 font-display text-display font-medium tracking-display">
          If it’s real, I’ll build it.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="max-w-sm text-muted">
              Frontend roles. Contract. AI-adjacent product UI. I read every
              message.
            </p>
            <ul className="mt-10 space-y-6 text-sm">
              <li>
                <p className="kicker">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 inline-flex items-center gap-1 text-fg transition-[opacity] duration-150 hover:opacity-70"
                >
                  {profile.email}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <p className="kicker">Phone</p>
                <a
                  href={profile.phoneHref}
                  className="mt-1 inline-flex text-fg transition-[opacity] duration-150 hover:opacity-70"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <p className="kicker">Social</p>
                <div className="mt-1 flex flex-wrap gap-x-5">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-fg hover:opacity-70"
                  >
                    LinkedIn <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-fg hover:opacity-70"
                  >
                    GitHub <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="flex min-h-80 flex-col justify-center border border-border bg-surface p-8">
                <span className="flex size-10 items-center justify-center rounded-sm bg-fg text-bg">
                  <Check className="size-4" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-medium tracking-tight">
                  Received.
                </h3>
                <p className="mt-3 max-w-md text-muted">
                  I’ll reply to {email} from {profile.email}.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8 w-fit"
                  onClick={() => {
                    setStatus("idle");
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="border border-border bg-surface p-5 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-xs text-danger">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-xs text-danger">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What should we ship?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-danger">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-mono text-xs text-muted">No list. A reply.</p>
                  <Button type="submit" variant="ink" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending…" : "Send"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
