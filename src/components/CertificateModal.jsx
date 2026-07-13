import "../styles/certificateModal.css";

export default function CertificateModal({
  isOpen,
  certificate,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <iframe
          src={certificate}
          title="Certificate"
          className="certificate-frame"
        ></iframe>

      </div>

    </div>
  );
}