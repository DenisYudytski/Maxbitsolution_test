import type { Cocktail } from "../types";

export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  return (
    <article className="card">
      <div className="cardContent">
        <h2 className="title">{cocktail.strDrink}</h2>
        <div className="meta">
          <div>{cocktail.strCategory}</div>
          <div>{cocktail.strAlcoholic}</div>
          <div>{cocktail.strGlass}</div>
        </div>
        <div className="instructions">
          <strong>Instructions:</strong> {cocktail.strInstructions}
        </div>
        <div className="ingredients">
          <strong>List of ingredients:</strong>
          <ul>
            {cocktail.ingredients.map((i, idx) => (
              <li key={idx}>
                {i.strMeasure || ""} {i.strIngredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="thumbWrap">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          loading="lazy"
          className="thumb"
        />
      </div>
    </article>
  );
}