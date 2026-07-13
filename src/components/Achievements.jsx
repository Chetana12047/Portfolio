import "../styles/achievements.css";
import {
  Trophy,
  Music4,
  Crown,
} from "lucide-react";
import {
  FaLightbulb,
  FaAward,
  FaMedal,
} from "react-icons/fa";
import { useState } from "react";
import CertificateModal from "./CertificateModal";


function Achievements() {
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
    <section className="achievements">

      <p className="section-tag">
        LEADERSHIP • EXPERIENCE • ACHIEVEMENTS
      </p>

      <h2 className="section-title">
        Technical Innovation
      </h2>

<div className="achievement-card">

  <div className="achievement-content">

    <div className="achievement-header">

      <div className="achievement-icon">
        <Trophy size={34} strokeWidth={1.8} />
      </div>

      <div className="achievement-heading">
        <h3>Smart India Hackathon 2025</h3>

        <span className="achievement-subtitle">
          Grand Finalist • Team Ataltra
        </span>
      </div>

    </div>

    <p>
      Reached the Grand Finale of Smart India Hackathon 2025 under the
      Blockchain & Cybersecurity theme with ExploreSure, an indigenous IoT,
      AI and Blockchain-based digital security solution.
    </p>

    <ul>
      <li>Team Lead for Team Ataltra</li>
      <li>Blockchain & Cybersecurity</li>
    </ul>

    <div className="achievement-actions">

      <button
        className="achievement-btn"
        onClick={() => openCertificate("/achievements/sih.pdf")}
      >
        <FaLightbulb size={15}/>
        Explore Idea
      </button>

    </div>

  </div>

</div>
      <h2 className="section-title">
        Beyond Development
      </h2>

      <div className="achievement-card">

  <div className="achievement-content">

    <div className="achievement-header">

      <div className="achievement-icon">
        <Music4 size={34} strokeWidth={1.8} />
      </div>

      <div className="achievement-heading">

        <h3>Best Self Composed Music</h3>

        <span className="achievement-subtitle">
          Firodiya Karandak • Golden Jubilee (2024)
        </span>

      </div>

    </div>

    <p>
      Felicitated for Best Self-Composed Music by the renowned musician and
      composer duo Ajay–Atul at the Golden Jubilee of Firodiya Karandak 2024.
    </p>

    <ul>
      <li>Best Self Composed Music Award</li>
      <li>An Intercollegiate multi-talent competition</li>
    </ul>

    <div className="achievement-actions">

      <button
        className="achievement-btn"
        onClick={() => openCertificate("/achievements/firodia.pdf")}
      >
        <FaMedal size={15}/>
        Laurels
      </button>

    </div>

  </div>

</div>

      <div className="achievement-card">

  <div className="achievement-content">

    <div className="achievement-header">

      <div className="achievement-icon">
        <Crown size={34} strokeWidth={1.8} />
      </div>

      <div className="achievement-heading">

        <h3>Music Head</h3>

        <span className="achievement-subtitle">
          AAVEG KALAMANDAL
        </span>

      </div>

    </div>

    <p>
      Led the college music team for major intercollegiate competitions
      including Firodiya Karandak, Sakal Karandak and Vinodottam Karandak,
      directing music production and mentoring performers.
    </p>

    <ul>
      <li>Managed rehearsals and stage execution</li>
      <li>Recipient of multiple music, singing and poetry recognitions</li>
    </ul>

    <div className="achievement-actions">

      <button
        className="achievement-btn"
        onClick={() => openCertificate("/achievements/artistic.pdf")}
      >
        <FaAward size={15}/>
        Recognitions
      </button>

    </div>

  </div>

</div>
      <div className="section-divider"></div>
      <CertificateModal
        isOpen={isOpen}
        certificate={selectedCertificate}
        onClose={closeCertificate}
      />

    </section>
  );
}

export default Achievements;