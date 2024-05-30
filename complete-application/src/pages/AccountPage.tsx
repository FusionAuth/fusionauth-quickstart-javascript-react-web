import { useFusionAuth } from "@fusionauth/react-sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dollarUS = Intl.NumberFormat("en-US", {
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
    <div className="app-container">
      <div>
        <h3>Your Balance</h3>
        <div className="balance">{balance}</div>
      </div>
    </div>
  );
}
