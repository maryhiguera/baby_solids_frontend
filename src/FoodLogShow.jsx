import { useState } from "react";

export function FoodLogShow({ food_log, onUpdate, onDestroy }) {
  const [selectedReaction, setSelectedReaction] = useState(food_log.reaction || "");
  const reactions = ["😊", "🤢", "❤️", "😡", "👍", "👎"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(food_log, params, successCallback);
  };

  return (
    <div className="p-3">
      <h3 className="mb-3">{food_log.baby.name}'s Food Log</h3>
      <p><strong>Food:</strong> {food_log.food.name}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"><strong>Reaction:</strong></label>
          <div className="mb-2">
            {reactions.map((emoji) => (
              <button
                key={emoji}
                type="button"
                className={`btn btn-outline-primary me-2 ${selectedReaction === emoji ? "active" : ""}`}
                style={{ fontSize: "1.5rem", lineHeight: 1 }}
                onClick={() => setSelectedReaction(emoji)}
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
          <label className="form-label"><strong>Notes:</strong></label>
          <textarea
            name="notes"
            defaultValue={food_log.notes}
            className="form-control"
            rows="3"
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDestroy(food_log)}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
