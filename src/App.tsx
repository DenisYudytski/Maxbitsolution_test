import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CocktailPage from "./pages/CocktailPage";
import RedirectPage from "./pages/RedirectPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RedirectPage />} />
        <Route path=":code" element={<CocktailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}