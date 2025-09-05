export async function fetchCocktails(code: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
  );
  if (!res.ok) throw new Error("Failed to fetch cocktails");
  return res.json();
}