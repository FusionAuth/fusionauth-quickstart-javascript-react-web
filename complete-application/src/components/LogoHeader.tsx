import { useFusionAuth } from "@fusionauth/react-sdk";
import changebankLogo from "../assets/changebank.svg";

export default function LogoHeader() {
  const { isLoggedIn, userInfo, startLogin, startLogout } = useFusionAuth();

  return (
    <div id="logo-header">
      <img src={changebankLogo} alt="Change Bank" width="259" height="70" />
      {isLoggedIn ? (
        <div className="h-row">
          <p className="header-email">{userInfo?.email}</p>
          <button
            className="button-lg"
            style={{ cursor: "pointer" }}
            onClick={() => startLogout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="button-lg"
          style={{ cursor: "pointer" }}
          onClick={() => startLogin("state-from-login")}
        >
          Login
        </button>
      )}
    </div>
  );
}
