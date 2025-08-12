export function FoodsShow({ food }) {
  return (
    <div>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          <strong>Minimum age in months:</strong> {food.min_age_months}
        </li>
        <li className="list-group-item">
          <strong>Texture:</strong> {food.texture}
        </li>
        <li className="list-group-item">
          <strong>Ingredients:</strong> {food.ingredients.join(", ")}
        </li>
        <li className="list-group-item">
          <strong>Instructions:</strong> {food.instructions}
        </li>
        <li className="list-group-item">
          <strong>Allergenic:</strong> {food.is_allergen ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
}
