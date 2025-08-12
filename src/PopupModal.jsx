import 'bootstrap/dist/css/bootstrap.min.css';

export function PopupModal({ children, show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="modal-content">
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
