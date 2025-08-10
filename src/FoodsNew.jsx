
export function FoodsNew({onCreate}) {
  const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const params = new FormData(form);
  const successCallback = () => form.reset();
  onCreate(params, successCallback);  
  };

  return ( 
    <div>
      <h1>Add new food:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text"/>
        </div>
        <div>
          Minimum Age: <input name="min_age_months" type="integer"/>
        </div>
        <div>
          Texture: <input name="texture" type="text"/>
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text"/>
        </div>
        <div>
          Instructions: <input name="instructions" type="text"/>
        </div>
        <div>
          Is Allergen: <input name="is_allergen" type="boolean"/>
        </div>
      </form>
    </div>
  )
};