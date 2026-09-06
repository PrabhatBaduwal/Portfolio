const Page = () => {
  return (
    <main>
      {/* Navigation */}
      <nav>
        <div>Prabhat Baduwal</div>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <p>Frontend Developer</p>
        <h1>
          Hi, I'm Prabhat.
          <br />I build things for the web.
        </h1>

        <p>
          A developer focused on creating modern, interactive, and user-friendly
          web experiences.
        </p>

        <div>
          <a href="#projects">View My Work</a>
          <a href="#contact">Get In Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <p>About Me</p>
        <h2>A little about me</h2>

        <p>
          I'm a frontend developer who enjoys turning ideas and designs into
          functional and engaging web experiences.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <p>Skills</p>
        <h2>Technologies I work with</h2>

        <div>
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>GSAP</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <p>Selected Work</p>
        <h2>Projects</h2>

        <div>
          {/* Project Card */}
          <article>
            <h3>Real Estate Platform</h3>
            <p>
              A modern real estate platform with property listings, search, and
              management features.
            </p>
            <a href="#">View Project</a>
          </article>

          <article>
            <h3>Hotel Website</h3>
            <p>
              A responsive hotel website focused on visual design, animations,
              and user experience.
            </p>
            <a href="#">View Project</a>
          </article>

          <article>
            <h3>Movie Booking App</h3>
            <p>
              A movie discovery and booking application with an interactive user
              interface.
            </p>
            <a href="#">View Project</a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p>Contact</p>
        <h2>Let's work together.</h2>

        <p>Have a project or opportunity in mind? I'd love to hear from you.</p>

        <a href="mailto:your@email.com">Get In Touch</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Prabhat Baduwal</p>
      </footer>
    </main>
  );
};

export default Page;
