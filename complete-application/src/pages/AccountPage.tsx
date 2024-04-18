import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFusionAuth } from "@fusionauth/react-sdk";

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: false,
});

export default function AccountPage() {
  const [balance] = useState(
    dollarUS.format(Math.ceil(Math.random() * 100000) / 100)
  );

  const navigate = useNavigate();

  const { isLoggedIn, isFetchingUserInfo } = useFusionAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn || isFetchingUserInfo) {
    return null;
  }

  return (
    <div className="column-container">
      <div className="app-container">
        <h3>Your balance</h3>
        <div className="balance">{balance}</div>
      </div>
    </div>
  );
}
