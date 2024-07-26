import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <h1>Roulette Simulator</h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            Balance
          </NavLink>

          <NavLink
            to="/roulette"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            Roulette
          </NavLink>

          <NavLink
            to="/game"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            Game
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
