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
        <div style={{ marginBottom: "100px" }}>
          <h1>Welcome to Changebank</h1>
          <p>
            To get started,
            <button
              className="button-redirect"
              style={{ cursor: "pointer" }}
              onClick={() => startLogin("state-from-login")}
            >
              log in
            </button>
            or
            <button
              className="button-redirect"
              style={{ cursor: "pointer" }}
              onClick={() => startRegister("state-from-register")}
            >
              create a new account.
            </button>
          </p>
        </div>
      </div>

      <div>
        <img src={background} alt="" />
      </div>
    </div>
  );
}
