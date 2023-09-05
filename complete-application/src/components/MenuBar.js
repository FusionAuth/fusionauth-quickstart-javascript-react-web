import {useFusionAuth} from "@fusionauth/react-sdk";
import {NavLink} from "react-router-dom";

export default function MenuBar() {
  const {isAuthenticated} = useFusionAuth();

  return (
    <div id="menu-bar" className="menu-bar">
      {
        isAuthenticated ? (
          <>
            <NavLink to="/make-change" className="menu-link" activeClassName="active">Make Change</NavLink>
            <NavLink to="/account" className="menu-link" activeClassName="active">Account</NavLink>
          </>
        ) : (
          <>
            <a className="menu-link">About</a>
            <a className="menu-link">Services</a>
            <a className="menu-link">Products</a>

            <a className="menu-link" style={{textDecorationLine: "underline"}}>Home</a>
          </>
        )
      }
    </div>
  )
}
