
import { useState, useEffect } from "react";
import "./App.css";
import "./Theme.css";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          CF<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            className={`theme-toggle ${theme === "dark" ? "dark" : "light"}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            title="Toggle theme"
            type="button"
          >
            <span className="theme-toggle-knob">
              {theme === "dark" ? (
              
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19 15.5A8 8 0 0 1 8.5 5a8.5 8.5 0 1 0 10.5 10.5Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
               
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                  <path
                    d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42m-11.3 11.3-1.42 1.42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </nav>

      <main className="hero" id="home">
        <section className="hero-content">

          <h2>
            Hi! Im Carlos Miguel Francisco
          </h2>
          <p className="bio">
            I'm a Computer Science student and UI/UX designer and a Frontend Developer,
            passionate about creating intuitive interfaces,
            thoughtful user experiences, and meaningful
            digital products.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore my work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Get in touch
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/miguelfranz"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/carlos-miguel-francisco-01a36a324/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
        </section>

        <section className="hero-visual" aria-label="Profile">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-glow"></div>

          <div className="profile-frame">
            <img
              src="/src/assets/miguel.png"
              alt="My profile"
              className="profile-image"
            />
          </div>

          <div className="floating-card design-card">
            <span className="card-icon">✳</span>
            <div>
              <strong>UI/UX Design</strong>
              <small>Thoughtful interfaces</small>
            </div>
          </div>

          <div className="floating-card code-card">
            <span className="code-icon">&lt;/&gt;</span>
            <div>
              <strong>Front-end</strong>
              <small>Building for the web</small>
            </div>
          </div>

          <div className="visual-label">
            CREATIVE MINDSET · TECHNICAL SKILLS
          </div>
        </section>
      </main>

      <Projects />
      <Contact />

    </div>
  );
}

export default App;
