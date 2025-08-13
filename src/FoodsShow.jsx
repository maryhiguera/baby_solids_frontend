export function FoodsShow({ food, onUpdate, onDestroy, isAdmin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(food.id, params, successCallback);
  };

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-center">
        <div className="card mb-4" style={{ maxWidth: "500px" }}>
          <div
            className="card-header text-white text-center"
            style={{ backgroundColor: "#a3c9c9" }} // pastel teal/blue
          >
            <h2 className="h5 mb-0">More Info</h2>
          </div>
          <div className="card-body text-center">
            <p><strong>Min. Age:</strong> {food.min_age_months} months</p>
            <p><strong>Texture:</strong> {food.texture}</p>
            <p><strong>Ingredients:</strong> {food.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {food.instructions}</p>
            <p>
              <strong>Allergenic:</strong>{" "}
              <span style={{ color: food.is_allergen ? "#e57373" : "#81c784" }}>
                {food.is_allergen ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>
      </div>



      {isAdmin && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="min_age_months" className="form-label fw-bold">
              Min. Age in Months:
            </label>
            <input
              id="min_age_months"
              name="min_age_months"
              type="number"
              className="form-control"
              defaultValue={food.min_age_months}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="texture" className="form-label fw-bold">
              Texture:
            </label>
            <input
              id="texture"
              name="texture"
              type="text"
              className="form-control"
              defaultValue={food.texture}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label fw-bold">
              Ingredients:
            </label>
            <input
              id="ingredients"
              name="ingredients"
              type="text"
              className="form-control"
              defaultValue={food.ingredients.join(", ")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="instructions" className="form-label fw-bold">
              Instructions:
            </label>
            <input
              id="instructions"
              name="instructions"
              type="text"
              className="form-control"
              defaultValue={food.instructions}
            />
          </div>

          <div className="form-check mb-3">
            <input
              id="is_allergen"
              name="is_allergen"
              type="checkbox"
              className="form-check-input"
              defaultChecked={food.is_allergen}
            />
            <label htmlFor="is_allergen" className="form-check-label fw-bold">
              Allergenic:
            </label>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDestroy(food)}
          >
            Delete
          </button>
        </form>
      )}
    </div>
  );
}
