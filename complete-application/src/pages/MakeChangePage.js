import {useFusionAuth} from "@fusionauth/react-sdk";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: false,
});

export default function MakeChangePage() {
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(null);

  const navigate = useNavigate();

  const {isAuthenticated, isLoading} = useFusionAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const makeChange = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const total = amount;
    const nickels = Math.floor(amount / 0.05);
    const pennies = Math.round((amount - nickels * 0.05) * 100);
    setChange({total, nickels, pennies})
  };

  if (!isAuthenticated || isLoading) {
    return null;
  }

  return (
    <div className="app-container change-container">
      <h3>We Make Change</h3>

      {change && (
      <div className="change-message">
        We can make change for {dollarUS.format(change.total)} with {change.nickels} nickels and {change.pennies} pennies!
      </div>
      )}

      <form onSubmit={makeChange}>
        <div className="h-row">
          <div className="change-label">Amount in USD: $</div>
          <input className="change-input" name="amount" value={amount} onChange={e => setAmount(e.target.value)} type="number" step=".01"/>
          <input className="change-submit" type="submit" value="Make Change"/>
        </div>
      </form>
    </div>
  );
}
