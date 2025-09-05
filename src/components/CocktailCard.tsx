import type { Cocktail } from "../types";

export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  return (
    <article className="card">
      <div className="cardContent">
        <h2 className="title">{cocktail.strDrink}</h2>
        <section className="meta">
          <div>{cocktail.strCategory}</div>
          <div>{cocktail.strAlcoholic}</div>
          <div>{cocktail.strGlass}</div>
        </section>
        <section className="instructions">
          <strong>Instructions:</strong> {cocktail.strInstructions}
        </section>
        <section className="ingredients">
          <strong>List of ingredients:</strong>
          <ul>
            {cocktail.ingredients.map((i, idx) => (
              <li key={idx}>
                {i.strMeasure || ""} {i.strIngredient}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <figure className="thumbWrap">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          loading="lazy"
          className="thumb"
        />
      </figure>
    </article>
  );
}
