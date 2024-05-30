import { useFusionAuth } from "@fusionauth/react-sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: false,
});

type Change = { total: number; nickels: number; pennies: number } | null;

export default function MakeChangePage() {
  const [amount, setAmount] = useState<number>(0);
  const [change, setChange] = useState<Change>(null);

  const navigate = useNavigate();

  const { isLoggedIn, isFetchingUserInfo } = useFusionAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const makeChange = (e: React.MouseEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const total = amount;
    const nickels = Math.floor(amount / 0.05);
    const pennies = Math.round((amount - nickels * 0.05) * 100);
    setChange({ total, nickels, pennies });
  };

  if (!isLoggedIn || isFetchingUserInfo) {
    return null;
  }

  return (
    <div className="app-container">
      <form className="change-container" onSubmit={makeChange}>
        <h3>Make Change</h3>
        <div className="change-label">Amount in USD</div>
        <input
          className="change-input"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          type="number"
          step=".01"
        />
        <input className="change-submit" type="submit" value="Make Change" />
      </form>
      {change && (
        <div className="change-message">
          We can make change for {dollarUS.format(change.total)} with{" "}
          {change.nickels} nickels and {change.pennies} pennies!
        </div>
      )}
    </div>
  );
}
