export interface Ingredient {
  strIngredient: string | null;
  strMeasure: string | null;
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: Ingredient[];
}