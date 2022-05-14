import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Table</NavLink>
      <NavLink to="/fixtures">Fixtures</NavLink>
      <NavLink to="/stats">Stats</NavLink>
      <NavLink to="/teams">Teams</NavLink>
    </nav>
  );
}
