import { profile } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-wide px-5 py-12 sm:px-8 sm:py-16">
        <p className="font-display text-hero font-medium uppercase tracking-display text-fg">
          Vijayaprathap
          <span className="text-muted"> P</span>
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="kicker">Write</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-[opacity] duration-150 hover:opacity-60"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="transition-[opacity] duration-150 hover:opacity-60"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Follow</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-[opacity] duration-150 hover:opacity-60"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-[opacity] duration-150 hover:opacity-60"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Now</p>
            <p className="mt-3 text-sm text-muted">
              {profile.location}. {profile.current}.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}
          </p>
          <p>Space Grotesk · IBM Plex Mono · {profile.coords}</p>
        </div>
      </div>
    </footer>
  );
}
