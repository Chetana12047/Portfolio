import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <p className="about-tag">
          ABOUT
        </p>

        <div className="about-content">

          <p className="about-description">
            I am a Computer Engineering graduate passionate about
            Artificial Intelligence, Full Stack Development, and Software
            Engineering. I enjoy building meaningful applications that combine
            technical excellence with thoughtful design to solve real-world
            problems and create pragmatic, user-focused digital experiences.
          </p>

          <p className="about-description">
            Beyond development, I enjoy exploring emerging technologies and embracing new challenges. 
            My experience in leadership, public speaking, and creative collaboration has strengthened my 
            communication, teamwork, and problem-solving abilities while helping me approach challenges 
            from both technical and creative perspectives.
          </p>

          <div className="interest-section">

            <div className="interest-line"></div>

            <p className="interest-heading">
              AREAS OF INTEREST
            </p>

            <div className="interest-list">

              <span>Artificial Intelligence</span>
              <span>Full Stack Development</span>
              <span>Software Engineering</span>

              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>System Design</span>
              <span>Cloud Computing</span>

              <span>Human-Computer Interaction</span>
              <span>Cybersecurity</span>
              <span>Natural Language Processing</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}