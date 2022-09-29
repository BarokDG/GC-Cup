import CustomNavLink from "./customNavLink";

import {
  faList,
  faDiceD6,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-between py-4 px-8 mb-2 bg-gray-800 rounded-full border border-b-4 border-gray-500 max-w-md left-1/2 -translate-x-1/2">
      <CustomNavLink to="/" icon={faList} text="Table" />
      <CustomNavLink to="/matches" icon={faDiceD6} text="Matches" />
      <CustomNavLink to="/stats" icon={faRankingStar} text="Stats" />
    </nav>
  );
}
