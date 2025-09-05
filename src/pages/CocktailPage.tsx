import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadCocktails } from "../features/cocktails/cocktailsSlice";
import CocktailCard from "../components/CocktailCard";

export default function CocktailPage() {
  const { code } = useParams<{ code: string }>();
  const dispatch = useAppDispatch();
  const cocktails = useAppSelector((s) => (code ? s.cocktails.items[code] : undefined));
  const status = useAppSelector((s) => s.cocktails.status);

  useEffect(() => {
    if (code && !cocktails) {
      void dispatch(loadCocktails(code));
    }
  }, [code, dispatch, cocktails]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load data. Please try again later.</p>;
  if (!cocktails || cocktails.length === 0) return <p>No cocktails found.</p>;

  return (
    <>
      {cocktails.map((c) => (
        <CocktailCard key={c.idDrink} cocktail={c} />
      ))}
    </>
  );
}
