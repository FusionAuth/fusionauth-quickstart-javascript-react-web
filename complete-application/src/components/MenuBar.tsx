import { useFusionAuth } from "@fusionauth/react-sdk";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  const { isLoggedIn } = useFusionAuth();

  return (
    <div id="menu-bar" className="menu-bar">
      {isLoggedIn ? (
        <>
          <NavLink to="/account" className="menu-link">
            Account
          </NavLink>
          <NavLink to="/make-change" className="menu-link">
            Make Change
          </NavLink>
        </>
      ) : (
        <>
          <button
            className="menu-link"
            style={{ textDecorationLine: "underline" }}
          >
            Home
          </button>
          <button className="menu-link">Products</button>
          <button className="menu-link">Services</button>
          <button className="menu-link">About</button>
        </>
      )}
    </div>
  );
}
