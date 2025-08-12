import "bootstrap/dist/css/bootstrap.min.css";

export function FoodLogModal({ children, show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body position-relative">
            {children}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
