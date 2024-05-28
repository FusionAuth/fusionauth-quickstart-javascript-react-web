import background from "../assets/money.jpg";
import { useNavigate } from "react-router-dom";
import { useFusionAuth } from "@fusionauth/react-sdk";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const { isLoggedIn, isFetchingUserInfo, startLogin, startRegister } =
    useFusionAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/account");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn || isFetchingUserInfo) {
    return null;
  }

  return (
    <div className="column-container">
      <div className="content-container">
        <div>
          <h1>Welcome to Changebank</h1>
            <p>
            Login or create a new account to get started
            </p>
            <button
              className="button-lg"
              style={{ cursor: "pointer" }}
              onClick={() => startLogin("state-from-login")}
            >
              Login
            </button>
            <br/>
            <button
              className="button-redirect"
              style={{ cursor: "pointer" }}
              onClick={() => startRegister("state-from-register")}
            >
              Create a new account.
            </button>
        </div>
      </div>

      <div className="image-container">
        <img src={background} alt="Coins" />
      </div>
    </div>
  );
}
