import background from '../assets/money.jpg';
import {useNavigate} from "react-router-dom";
import {useFusionAuth} from "@fusionauth/react-sdk";
import {useEffect} from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const {isAuthenticated, isLoading, login, register} = useFusionAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated || isLoading) {
    return null;
  }

  return (
    <div className="column-container">
      <div className="content-container">
        <div style={{marginBottom: '100px'}}>
          <h1>Welcome to Changebank</h1>
          <p>
            To get started,
            <button className="button-redirect" style={{ cursor: "pointer" }} onClick={() => login('state-from-login')}>
              log in
            </button>
            or
            <button className="button-redirect" style={{ cursor: "pointer" }} onClick={() => register('state-from-register')}>
              create a new account.
            </button>
          </p>
        </div>
      </div>

      <div style={{flex: 0}}>
        <img src={background} style={{maxWidth: '800px'}} alt=""/>
      </div>
    </div>
  )
}
