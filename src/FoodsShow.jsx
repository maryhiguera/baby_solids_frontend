export function FoodsShow({food}) {
  return (
    <div>
      <p>Minimum age in months: {food.min_age_months}</p>
      <p>Texture: {food.texture}</p>
      <li>Ingredients: {food.ingredients}</li>
      <p>Instructions: {food.instructions}</p>
      <p>Allergic: {food.is_allergen}</p>
    </div>
  )
}