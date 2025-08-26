import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useFusionAuth } from "@fusionauth/react-sdk";
import { useNavigate } from "react-router-dom";

function getExpiryTimeInSeconds(): number {
  const parts = document.cookie.split('; ');
  for (let i = 0; i < parts.length; i++) {
    const [k, v] = parts[i].split('=');
    if (k === 'app.at_exp') {
      const expiry = Number(decodeURIComponent(v));
      const now = Math.floor(Date.now() / 1000);
      return expiry - now;
    }
  }
  return 0;
}

async function refreshAuthentication() {
  await fetch("http://localhost:9011/app/refresh/e9fdb985-9173-4e01-9d73-ac2d60d1dc8e", { method: "POST", credentials: "include" });
}

export default function Account() {
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogout, userInfo, refreshToken } = useFusionAuth();
  useEffect(() => { if (!isLoggedIn) navigate("/"); }, [isLoggedIn, navigate]);
  if (!isLoggedIn || isFetchingUserInfo) return null;

  const [expiryTimeInSeconds, setExpiryTimeInSeconds] = useState(0);
  useEffect(() => {
    setExpiryTimeInSeconds(getExpiryTimeInSeconds());
    const intervalId = setInterval(() => { setExpiryTimeInSeconds(getExpiryTimeInSeconds()); }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Log out</button>
      </div>
      <div className='centerContainer'>
        <div className="userInfoGrid">
          <div>Name:                     </div><div>{userInfo?.given_name} {userInfo?.family_name}</div>
          <div>Birthdate:                </div><div>{userInfo?.birthdate}                         </div>
          <div>                          </div><div>                                              </div>
          <div>                          </div><div>                                              </div>
          <div>Authentication expires in:</div><div>{expiryTimeInSeconds} seconds                 </div>
        </div>
        <br />
        <div>
          <button className="button" onClick={refreshToken}>Refresh authentication</button>
        </div>
      </div>
    </div>
  );
}
