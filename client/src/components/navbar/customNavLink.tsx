import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  to: string;
  icon: IconProp;
  text: string;
};

export default function CustomNavLink({ to, icon, text }: Props) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => (isActive ? "selected" : "")}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </NavLink>
  );
}
