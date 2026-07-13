import { useEffect, useState } from "react";

import CinematicSmoke from "./components/CinematicSmoke";
import BrandSignature from "./components/BrandSignature";
import HeroTitle from "./components/HeroTitle";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {

    const sections = [
      "home",
      "about",
      "projects",
      "contact",
    ];

    const handleScroll = () => {

      const scrollPosition =
        window.scrollY + window.innerHeight * 0.45;

      let current = "home";

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (
          section &&
          scrollPosition >= section.offsetTop
        ) {
          current = id;
        }

      });

      setActiveSection((prev) =>
        prev === current ? prev : current
      );

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);
  const scrollToSection = (id) => {

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

};

  return (
    <div className="app">
      <CinematicSmoke />

      <nav className="navbar">

        <a
  className="logo"
  onClick={() => scrollToSection("home")}
  onMouseEnter={() => setLogoHovered(true)}
  onMouseLeave={() => setLogoHovered(false)}
>
  <BrandSignature hovered={logoHovered} />
</a>

        <div className="nav-links">

          <a
  onClick={() => scrollToSection("home")}
  className={activeSection === "home" ? "active" : ""}
>
  Home
</a>

<a
  onClick={() => scrollToSection("about")}
  className={activeSection === "about" ? "active" : ""}
>
  About
</a>

<a
  onClick={() => scrollToSection("projects")}
  className={activeSection === "projects" ? "active" : ""}
>
  Projects
</a>

<a
  onClick={() => scrollToSection("contact")}
  className={activeSection === "contact" ? "active" : ""}
>
  Contact
</a>

        </div>

      </nav>
      {activeSection === "home" && (
      <div className="social-dock">

  <a
    href="mailto:chetanaingle7@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Email"
  >
  <span className="social-label">

    chetanaingle7

  </span>
    <FaEnvelope size={19.5} />
  </a>

  <a
    href="https://www.linkedin.com/in/chetana-ingle-548556257/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <span className="social-label">

    /chetana-ingle

  </span>
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="https://github.com/Chetana12047"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <span className="social-label">

    Chetana12047

  </span>
    <FaGithub size={24} />
  </a>

</div>
)}

      <section id="home" className="hero">

        <div className="hero-bg-squares"></div>

        <div className="hero-content">

          <p className="intro">
            HI, I'M
          </p>

          <HeroImage />

          <HeroTitle />

          <h2>
            AI • FULL STACK • SOFTWARE DEVELOPER
          </h2>

          <p className="desc">
            Building software with curiosity, precision, and purpose.
          </p>

          <div className="buttons">

            <a
  className="hero-btn"
  onClick={() => scrollToSection("projects")}
>
              View Work
            </a>

            <a
  className="hero-btn"
  onClick={() => scrollToSection("contact")}
>
              Contact
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Resume
            </a>

          </div>

        </div>

      </section>

      <About />

      <TechStack />

      <Certifications />
      <Achievements />

      <section id="projects" className="projects">
        <Projects />
      </section>

      <section id="contact" className="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;