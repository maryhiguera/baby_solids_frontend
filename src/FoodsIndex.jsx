export function FoodsIndex({foods}) {
  return (
    <div>
      <h1>Baby Foods:</h1>
      {foods.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
        </div>
      ))}
    </div>
  );
}