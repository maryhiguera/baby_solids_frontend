export function BabyShow({ baby, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(baby, params, successCallback);
  };

  return (
    <div className="container p-3">
      <h3 className="text-primary mb-3">{baby.name}</h3>
      <p className="text-muted">
        <strong>Birthdate:</strong>{" "}
        {new Date(baby.birthdate).toLocaleDateString()}
      </p>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            defaultValue={baby.name}
            name="name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Birthdate</label>
          <input
            defaultValue={baby.birthdate}
            name="birthdate"
            type="date"
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Update
          </button>
          <button
            type="button"
            onClick={() => onDestroy(baby)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
