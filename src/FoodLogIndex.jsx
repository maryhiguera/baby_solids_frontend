export function FoodLogIndex({ food_logs, onShow }) {
  const colors = ["#ffe6e6", "#e6f7ff", "#e6ffe6", "#fff5e6", "#f9e6ff"];

  return (
    <main className="container mt-4">
      <div className="row">
        {food_logs.map((food_log) => (
          <div key={food_log.id} className="col-md-6 col-lg-4 mb-4">
            <div
              className="card shadow-sm h-100"
              style={{ backgroundColor: colors[food_log.id % colors.length] }}
            >
              <div 
                className="card-body d-flex flex-column"
              >
                <h5 className="card-title">
                  {food_log.baby.name}'s Food Log
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Baby ID: {food_log.baby_id}
                </h6>
                <p className="card-text">
                  <strong>Food:</strong> {food_log.food.name}
                </p>
                <p className="card-text">
                  <strong>Reaction:</strong> {food_log.reaction}
                </p>
                <p className="card-text mb-3">
                  <strong>Notes:</strong> {food_log.notes}
                </p>
                <button
                  className="btn btn-sm btn-primary mt-auto align-self-start"
                  onClick={() => onShow(food_log)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
