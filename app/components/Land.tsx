const Land = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Prabhat<span className="text-neutral-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition-colors hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-neutral-800 px-5 py-2 text-sm transition-all hover:border-neutral-600 hover:bg-neutral-900"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-88px)] items-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Hi, I'm <span className="text-neutral-500">Prabhat.</span>
              <br />
              I build things
              <br />
              <span className="text-neutral-500">for the web.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
              I create modern, interactive, and user-friendly web experiences
              with a focus on clean design and thoughtful interactions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-neutral-800 px-6 py-3 text-sm font-medium text-white transition-all hover:border-neutral-600 hover:bg-neutral-900"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-4 text-sm text-neutral-600">
            <span className="h-px w-12 bg-neutral-800" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-neutral-900 px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A little about me.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-neutral-400 md:text-lg">
            <p>
              I'm a frontend developer who enjoys turning ideas and designs into
              functional and engaging web experiences.
            </p>

            <p>
              I care about the details — from responsive layouts and smooth
              animations to creating interfaces that feel good to use.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-neutral-900 px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900 sm:grid-cols-3">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "GSAP",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-neutral-950 p-6 text-sm text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-neutral-900 px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Selected Work
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Things I've built.
            </h2>

            <span className="text-sm text-neutral-600">03 — Projects</span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="group overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-925">
              <div className="flex aspect-video items-center justify-center bg-neutral-900">
                <span className="text-sm text-neutral-600">
                  Project Preview
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-neutral-600">
                  Web Application
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  Real Estate Platform
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  A modern real estate platform with property listings, search,
                  and management features.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-925">
              <div className="flex aspect-video items-center justify-center bg-neutral-900">
                <span className="text-sm text-neutral-600">
                  Project Preview
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-neutral-600">
                  Website
                </p>

                <h3 className="mt-3 text-2xl font-medium">Hotel Website</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  A responsive hotel website focused on visual design,
                  animations, and user experience.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="group overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-925 md:col-span-2">
              <div className="flex aspect-[2/1] items-center justify-center bg-neutral-900">
                <span className="text-sm text-neutral-600">
                  Project Preview
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-neutral-600">
                  Web Application
                </p>

                <h3 className="mt-3 text-2xl font-medium">Movie Booking App</h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  A movie discovery and booking application with an interactive
                  user interface.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-block text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-neutral-900 px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Let's build something
            <span className="text-neutral-500"> together.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-neutral-500">
            Have a project, opportunity, or just want to say hello? Feel free to
            reach out.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Get In Touch →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-neutral-600 sm:flex-row">
          <p>© 2026 Prabhat Baduwal</p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Land;
