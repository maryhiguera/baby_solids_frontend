import { useState } from "react";

export function FoodsIndex({ foods, onShow }) {
  const [sortOption, setSortOption] = useState("name-asc");

  const sortedFoods = [...foods].sort((a, b) => {
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    if (sortOption === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div
      className="container-fluid min-vh-100 p-4 pt-5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1498940757830-82f7813bf178?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1
          className="display-5 fw-bold"
          style={{ color: "white", textShadow: "1px 1px 3px rgba(243, 232, 232, 0.8)" }}
        >
          First Foods{" "}
          <small className="text-white" style={{ fontSize: "0.6em", opacity: 0.8 }}>
            - food database just for babies
          </small>
        </h1>

        <div style={{ minWidth: "180px" }}>
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name-asc">Name A → Z</option>
            <option value="name-desc">Name Z → A</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <div className="row g-3">
        {sortedFoods.map((food) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={food.id}>
            <div className="card shadow-sm h-100">
              {food.image_url && (
                <img
                  src={food.image_url}
                  className="card-img-top"
                  alt={food.name}
                  style={{ height: "140px", objectFit: "cover" }}
                />
              )}
              <div className="card-body py-2">
                <h6 className="card-title mb-1">{food.name}</h6>
                <p className="card-text text-muted mb-2" style={{ fontSize: "0.85rem" }}>
                  {food.category}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 py-2 d-flex justify-content-end">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => onShow(food)}
                  style={{ padding: "0.25rem 0.5rem", fontSize: "0.85rem" }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
