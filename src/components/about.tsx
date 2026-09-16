import { education, experience, profile } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-wide border-t border-border pt-8">
        <p className="kicker text-fg">02 — About</p>
        <h2 className="mt-6 max-w-4xl font-display text-display font-medium tracking-display">
          The interface is the company.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <dl className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-1">
            <div>
              <dt className="kicker">Experience</dt>
              <dd className="mt-2 font-display text-4xl font-medium tracking-tight tabular-nums">
                {profile.years}
                <span className="text-xl text-muted"> yrs</span>
              </dd>
            </div>
            <div>
              <dt className="kicker">Based</dt>
              <dd className="mt-2 font-display text-4xl font-medium tracking-tight">
                {profile.location}
              </dd>
            </div>
            <div>
              <dt className="kicker">Now</dt>
              <dd className="mt-2 text-sm text-fg">{profile.current}</dd>
            </div>
          </dl>

          <div className="lg:col-span-8">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {profile.about.map((para) => (
                <p key={para} className="text-pretty">
                  {para}
                </p>
              ))}
            </div>

            <ol className="mt-14">
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="grid gap-3 border-t border-border py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
                >
                  <p className="pt-1 font-mono text-xs tabular-nums text-muted">
                    {job.dates}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {job.company}
                      <span aria-hidden="true"> · </span>
                      {job.place}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg">
                      {job.points.map((point) => (
                        <li key={point} className="pl-4 -indent-3">
                          <span className="text-subtle">— </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li className="grid gap-3 border-t border-border py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10">
                <p className="pt-1 font-mono text-xs tabular-nums text-muted">
                  {education.dates}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {education.school}
                    <span aria-hidden="true"> · </span>
                    {education.place}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
