export function BabyIndex({ babies, onShow }) {
  const colors = ["#ffe6e6", "#e6f7ff", "#e6ffe6", "#fff5e6", "#f9e6ff"];

  return (
    <main className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-semibold text-primary">Baby Information</h2>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        {babies.length === 0 && <p>No babies found.</p>}
        {babies.map((baby) => (
          <div
            key={baby.id}
            className="p-3 border rounded w-100 d-flex justify-content-between align-items-center"
            style={{
              maxWidth: "400px",
              backgroundColor: colors[baby.id % colors.length]
            }}
          >
            <div>
              <p className="mb-1">
                <strong>Name:</strong> {baby.name}
              </p>
              <p className="mb-0">
                <strong>Birthdate:</strong> {new Date(baby.birthdate).toLocaleDateString()}
              </p>
            </div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => onShow(baby)}
              aria-label={`Show details for ${baby.name}`}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
