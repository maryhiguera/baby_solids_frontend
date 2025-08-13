export function FoodsNew({ onCreate, isAdmin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  if (!isAdmin) {
    return (
      <p className="text-center text-danger mt-4">
        You do not have permission to add new foods.
      </p>
    );
  }

  return (
    <div className="container my-5">
      <h1
        className="text-center mb-4"
        style={{
          backgroundColor: "#ffda77",   // warm, soft yellow background
          color: "#4b3b00",             // dark brown text for contrast
          padding: "1rem 2rem",
          borderRadius: "12px",
          boxShadow: "2px 4px 6px rgba(0,0,0,0.1)",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
          userSelect: "none",
        }}
      >
        Add New Food
      </h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="image_url" className="form-label">Image URL</label>
            <input
              name="image_url"
              type="text"
              id="image_url"
              className="form-control"
              placeholder="Enter image URL"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name *</label>
            <input
              name="name"
              type="text"
              id="name"
              className="form-control"
              required
              placeholder="Food name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Category *</label>
            <input
              name="category"
              type="text"
              id="category"
              className="form-control"
              required
              placeholder="Food category"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="min_age_months" className="form-label">Minimum Age (months) *</label>
            <input
              name="min_age_months"
              type="number"
              id="min_age_months"
              className="form-control"
              required
              placeholder="Minimum age in months"
              min="0"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="texture" className="form-label">Texture *</label>
            <input
              name="texture"
              type="text"
              id="texture"
              className="form-control"
              required
              placeholder="Texture description"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="ingredients" className="form-label">Ingredients *</label>
            <input
              name="ingredients"
              type="text"
              id="ingredients"
              className="form-control"
              required
              placeholder="List ingredients separated by commas"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="instructions" className="form-label">Instructions *</label>
            <input
              name="instructions"
              type="text"
              id="instructions"
              className="form-control"
              required
              placeholder="Preparation instructions"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check mb-0">
              <input
                name="is_allergen"
                type="checkbox"
                className="form-check-input"
                id="is_allergen"
              />
              <label htmlFor="is_allergen" className="form-check-label">
                Is Allergen
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
