import { useState } from "react";

export function FoodLogNew({ onCreate }) {
  const reactions = ["😊", "🤢", "❤️", "😡", "👍", "👎"];
  const [selectedReaction, setSelectedReaction] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    setSelectedReaction("");
    onCreate(params, successCallback);
  };

  return (
    <div className="container mt-4">
      <h4 className="fw-bold text-primary mb-4 border-bottom pb-2">
        Add New Food Log
      </h4>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Baby ID</label>
          <input
            name="baby_id"
            type="number"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Food ID</label>
          <input
            name="food_id"
            type="number"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reaction</label>
          <div>
            {reactions.map((emoji) => (
              <button
                type="button"
                key={emoji}
                onClick={() => setSelectedReaction(emoji)}
                style={{
                  fontSize: "1.5rem",
                  margin: "0 5px 5px 0",
                  border: selectedReaction === emoji ? "2px solid #0d6efd" : "1px solid #ccc",
                  borderRadius: "5px",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "5px 8px",
                }}
                aria-label={`Select reaction ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            name="reaction"
            value={selectedReaction}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            name="notes"
            className="form-control"
            rows="4"
            placeholder="Enter any additional notes here..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={!selectedReaction}>
          Create Food Log
        </button>
      </form>
    </div>
  );
}
