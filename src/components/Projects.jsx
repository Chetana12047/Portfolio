import "../styles/projects.css";
import {
  FaGithub,
    FaFilePdf,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        <p className="projects-tag">
          PROJECTS
        </p>

        {/* =======================
            SkillSage
        ======================= */}

        <div className="project-card">

          <div className="project-gallery">
            <div className="project-images">
              <img src="/Projects/skillsage-1.png" alt="SkillSage 1" />
              <img src="/Projects/skillsage-2.png" alt="SkillSage 2" />
            </div>
          </div>
          <div className="project-content">

            <h2>SkillSage</h2>

            <div className="project-section">
              <h4>IDEA</h4>
              <p>Adaptive Career Roadmap Generator</p>
            </div>

            <div className="project-section">
              <h4>IMPLEMENTATION</h4>
              <p>AI-powered resume analysis, ATS-based skill-gap evaluation,
                adaptive roadmap generation, career readiness assessment,
                personalized course recommendations, and AI-assisted career counseling within a unified platform.</p>
            </div>

            <div className="project-section">
              <h4>RESULT</h4>
              <p>Bridges the gap between existing skills and industry expectations
                through personalized career guidance, enabling confident career decisions.</p>
            </div>

            <div className="project-section">
              <h4>TECH STACK</h4>
              <p>Next.js • React • TypeScript • Tailwind CSS • Prisma • SQLite • NextAuth • Cloudinary</p>
            </div>

            <div className="project-links skillsage-links">

              <a
                href="https://skillsage-production-d291.up.railway.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={15.5} />
                Live Demo
              </a>

              <a
              className="paper-btn"
                href="/Projects/skillsage-research-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFilePdf size={15} />
                Conference Paper
              </a>

              <a
                href="https://github.com/Chetana12047/SkillSage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18.5} />
                GitHub
              </a>

            </div>

          </div>

        </div>


        <div className="project-break">

          <span>◇</span>

        </div>

        {/* =======================
            NeuroTrace
        ======================= */}

        <div className="project-card reverse">

          <div className="project-content">

            <h2>NeuroTrace</h2>

            <div className="project-section">
              <h4>IDEA</h4>
              <p>Behavioral Productivity Analytics Platform</p>
            </div>

            <div className="project-section">
              <h4>IMPLEMENTATION</h4>
              <p>eveloped a real-time behavioral analytics system that records browser 
                and desktop activity, categorizes digital behavior, generates interactive 
                dashboards, timelines, focus analytics, and actionable productivity insights.</p>
            </div>

            <div className="project-section">
              <h4>RESULT</h4>
              <p>Transforms digital behavior into productivity insights,
                enabling users to optimize focus, manage distractions, build healthier digital routines.
              </p>
            </div>

            <div className="project-section">
              <h4>TECH STACK</h4>
              <p>Next.js • React • TypeScript • Tailwind CSS • Supabase • Node.js • Recharts</p>
            </div>

            <div className="project-links">
              <a
                href="https://neuro-trace-indol.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={15.5} />
                Live Demo
              </a>

              <a
                href="https://github.com/Chetana12047/NeuroTrace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18.5} />
                GitHub
              </a>

            </div>

          </div>
          <div className="project-gallery">
            <div className="project-images">
              <img src="/Projects/neurotrace-1.png" alt="NeuroTrace 1" />
              <img src="/Projects/neurotrace-2.png" alt="NeuroTrace 2" />
            </div>
          </div>

        </div>
        <div className="project-break">

          <span>◇</span>
        </div>

        {/* =======================
            Wanderlust
        ======================= */}

        <div className="project-card">
          <div className="project-gallery">
            <div className="project-images">
              <img src="/Projects/wanderlust-1.png" alt="Wanderlust 1" />
              <img src="/Projects/wanderlust-2.png" alt="Wanderlust 2" />
            </div>
          </div>

          <div className="project-content">

            <h2>Wanderlust</h2>

            <div className="project-section">
              <h4>IDEA</h4>
              <p>Smart Vacation Escapes</p>
            </div>

            <div className="project-section">
              <h4>IMPLEMENTATION</h4>
              <p>Developed a full-stack vacation rental platform featuring
                secure authentication, property listing management, cloud-based uploads,
                interactive maps, user reviews, and complete CRUD functionality with a responsive user experience.</p>
            </div>

            <div className="project-section">
              <h4>RESULT</h4>
              <p>Delivers a seamless vacation rental experience, enabling users to discover,
                share, and manage stays through a secure and intuitive platform.</p>
            </div>

            <div className="project-section">
              <h4>TECH STACK</h4>
              <p>Node.js • Express.js • MongoDB • Mongoose • EJS • Bootstrap • Passport.js • Cloudinary • Mapbox</p>
            </div>

            <div className="project-links">
              <a
                href="https://wanderlust-qjee.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={15.5} />
                Live Demo
              </a>

              <a
                href="https://github.com/Chetana12047/Wanderlust"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18.5} />
                GitHub
              </a>
            </div>

          </div>

        </div>

        <div className="project-break">

          <span>◇</span>

        </div>

        {/* =======================
            Kotoba
        ======================= */}

        <div className="project-card reverse">

          <div className="project-content">

            <h2>Kotoba</h2>

            <div className="project-section">
              <h4>IDEA</h4>
              <p>AI-Powered Japanese Learning Platform</p>
            </div>

            <div className="project-section">
              <h4>IMPLEMENTATION</h4>
              <p>Developed a Japanese learning platform featuring AI-powered translation,
                Hiragana & Katakana practice, flashcards, quizzes, and secure user
                authentication through a modern, responsive interface.</p>
            </div>

            <div className="project-section">
              <h4>RESULT</h4>
              <p>Provides an accessible learning experience, helping users build
                Japanese language skills through interactive AI-assisted learning.</p>
            </div>

            <div className="project-section">
              <h4>TECH STACK</h4>
              <p>Next.js • TypeScript • Tailwind CSS • Clerk • Groq API • Vercel</p>
            </div>

            <div className="project-links">
              <a
                href="https://kotoba-kohl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe size={15.5} />
                Live Demo
              </a>

              <a
                href="https://github.com/Chetana12047/Kotoba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18.5} />
                GitHub
              </a>
            </div>

          </div>
          <div className="project-gallery">
            <div className="project-images">
              <img src="/Projects/kotoba-1.png" alt="Kotoba 1" />
              <img src="/Projects/kotoba-2.png" alt="Kotoba 2" />
            </div>
          </div>
        </div>
        <div className="projects-divider"></div>

      </div>

    </section>

  );
}