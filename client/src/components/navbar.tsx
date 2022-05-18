import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faDiceD6,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-between py-4 px-8 mb-4 bg-gray-800 rounded-full border border-b-4 border-gray-500">
      <CustomNavLink to="/" icon={faList} text="Table" />
      <CustomNavLink to="/matches" icon={faDiceD6} text="Matches" />
      <CustomNavLink to="/stats" icon={faRankingStar} text="Stats" />
    </nav>
  );
}

function CustomNavLink({ to, icon, text }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "selected" : "")}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </NavLink>
  );
}
