import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCocktails } from "./cocktailsAPI";
import type { Cocktail } from "../../types";

interface CocktailsState {
  items: Record<string, Cocktail[]>;
  status: "idle" | "loading" | "failed";
}

const initialState: CocktailsState = {
  items: {},
  status: "idle",
};

export const loadCocktails = createAsyncThunk(
  "cocktails/load",
  async (code: string) => {
    const data = await fetchCocktails(code);
    return { code, drinks: data.drinks || [] };
  }
);

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCocktails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCocktails.fulfilled, (state, action) => {
        state.status = "idle";
        state.items[action.payload.code] = action.payload.drinks.map((d: any) => ({
          idDrink: d.idDrink,
          strDrink: d.strDrink,
          strCategory: d.strCategory,
          strAlcoholic: d.strAlcoholic,
          strGlass: d.strGlass,
          strInstructions: d.strInstructions,
          strDrinkThumb: d.strDrinkThumb,
          ingredients: Array.from({ length: 15 }, (_, i) => ({
            strIngredient: d[`strIngredient${i + 1}`],
            strMeasure: d[`strMeasure${i + 1}`],
          })).filter((ing) => ing.strIngredient),
        }));
      })
      .addCase(loadCocktails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cocktailsSlice.reducer;