import { useState } from "react";
import "../styles/certifications.css";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const openCertificate = (path) => {
    setSelectedCertificate(path);
    setIsOpen(true);
    };

  const closeCertificate = () => {
    setIsOpen(false);
    setSelectedCertificate("");
    };
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">

        <p className="certifications-tag">
          CERTIFICATIONS
        </p>

        <div className="certifications-grid">

          {/* LEFT COLUMN */}

          <div className="cert-column">

            <div className="certificate-card">
              <div className="certificate-header">
                <h3>Oracle Cloud Infrastructure 2025 AI Foundations Associate</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/oracle-ai-foundations.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>Oracle University
                <br />
                Fundamentals of AI, Machine Learning and Oracle AI Cloud.
              </p>
            </div>

            <div className="certificate-card">
              <div className="certificate-header">
                <h3>Delta – Full Stack Web Development</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/delta-fullstack.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Apna College
                <br />
                HTML • CSS • JavaScript • React • Node.js • Express • MongoDB •
                SQL
              </p>
            </div>

            <div className="certificate-card">

              <div className="certificate-header">
                <h3>Data Structures & Algorithms with Java</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/dsa-java.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Apna College
                <br />
                DSA • Arrays • Linked Lists • Trees • Graphs • Dynamic Programming
              </p>

            </div>

            <div className="certificate-card">

              <div className="certificate-header">
                <h3>Oasis Infobyte Internships</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/oasis.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Oasis Infobyte
                <br />
                Python Programming • Java Development • Data Science • Security Analyst
              </p>

            </div>
            

            <div className="certificate-card">

              <div className="certificate-header">
                <h3>International Bootcamp on DSA for DeepTech</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/dsa-deeptech.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>Brainovision × AICTE × DYP Institute
                <br />
                Advanced Data Structures, Algorithms and competitive problem solving.
              </p>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="cert-column">

            <div className="certificate-card">

              <div className="certificate-header">
                <h3>Oracle Cloud Infrastructure 2025 Foundations Associate</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/oracle-foundations.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Oracle University
                <br />
                Cloud Infrastructure fundamentals: Compute, Networking and Security.
                </p>

            </div>

            <div className="certificate-card">

              <div className="certificate-header different-positioning">
                <h3>
                  International Conference on Contemporary Engineering &
                  Technology
                </h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/Conference.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p> ICCET 2026 <br />
                Certificate of Presentation — SkillSage: Adaptive Career
                Roadmap Generator
              </p>

            </div>
            <div className="certificate-card">

              <div className="certificate-header">
                <h3>Data Structures & Algorithms with C++</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/dsa-cpp.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Apna College
                <br />
                DSA • Arrays • Linked Lists • Trees • Graphs • Dynamic Programming
              </p>

            </div>

            <div className="certificate-card">

              <div className="certificate-header">
                <h3>Data Analytics Internship</h3>
                <button
                    onClick={() =>
                        openCertificate("/certificates/internshipstudio.pdf")
                    }
                >
                    View
                </button>
              </div>

              <p>
                Internship Studio
                <br />
                Hands-on experience in data analysis, reporting and visualization. 
              </p>

            </div>
            
            <div className="certificate-card">

            <div className="certificate-header">
            <h3>Career Essentials in Generative AI</h3>
            <button
                onClick={() =>
                   openCertificate("/certificates/career-essentials-ai.pdf")
                }
            >
                View
            </button>
            </div>

            <p>Microsoft × LinkedIn Learning
                <br />
                Explored Generative AI fundamentals and responsible AI practices.
            </p>

            </div>

          </div>

        </div>

        <div className="certifications-divider"></div>
        <CertificateModal
            isOpen={isOpen}
            certificate={selectedCertificate}
            onClose={closeCertificate}
        />

      </div>
      
    </section>
  );
}