import {useFusionAuth} from "@fusionauth/react-sdk";
import logo from "../assets/changebank.svg";

export default function LogoHeader() {
  const {isAuthenticated, user, login, logout} = useFusionAuth();

  return (
    <div id="logo-header">
      <img src={logo} alt="Change Bank" width="257" height="55"/>
      {
        isAuthenticated ? (
          <div className="h-row">
            <p className="header-email">
              {user.email}
            </p>
            <button className="button-lg" style={{cursor: "pointer"}} onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <button className="button-lg" style={{cursor: "pointer"}} onClick={() => login('state-from-login')}>
            Login
          </button>
        )
      }
    </div>
  )
}
