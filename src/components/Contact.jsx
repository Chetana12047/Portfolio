import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <p className="contact-tag">
          CONTACT
        </p>

        <h2>
          Let's Connect
        </h2>

        <p className="contact-text">
          Whether it's a collaboration, opportunity, research, or simply a
          conversation about technology, I'd be happy to connect.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:YOUR_EMAIL">
              chetanaingle7@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/chetana-ingle-548556257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /chetana-ingle
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/Chetana12047"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chetana12047
            </a>
          </div>

          <div className="contact-item">
            <span>Phone</span>
            <a href="tel:+910000000000">
              +91 8180807089
            </a>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Pune, Maharashtra, India</p>
          </div>

        </div>

        <a
          href="/Resume.pdf"
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

      </div>

    </section>
  );
}