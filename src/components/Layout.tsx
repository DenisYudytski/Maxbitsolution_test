import { NavLink, Outlet } from "react-router-dom";

const codes = ["margarita", "mojito", "a1", "kir"];

export default function Layout() {
  return (
    <main className="container">
      <nav className="sidebar">
        {codes.map((c) => (
          <NavLink
            key={c}
            to={`/${c}`}
            className={({ isActive }) => (isActive ? "menuItem active" : "menuItem")}
            end
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </NavLink>
        ))}
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </main>
  );
}
