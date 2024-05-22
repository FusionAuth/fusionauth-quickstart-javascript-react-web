import {useFusionAuth} from "@fusionauth/react-sdk";
import {NavLink} from "react-router-dom";

export default function MenuBar() {
  const {isLoggedIn} = useFusionAuth();

  return (
    isLoggedIn ? (
      <div id="menu-bar" className="menu-bar">
        <NavLink to="/make-change" className="menu-link">Make Change</NavLink>
        <NavLink to="/account" className="menu-link">Account</NavLink>
      </div>
    ) : null
  );
}
