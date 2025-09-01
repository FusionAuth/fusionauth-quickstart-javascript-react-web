//tag::a[]
import { useFusionAuth } from "@fusionauth/react-sdk";
//end::a[]
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from "react-router-dom";

//tag::b[]
function getExpiryTimeInSeconds(): number {
  for (const cookie of document.cookie.split('; ')) {
    const [key, value] = cookie.split('=');
    if (key !== 'app.at_exp') continue;
    const expiry = Number(decodeURIComponent(value));
    const now = Math.floor(Date.now() / 1000);
    return expiry - now;
  }
  return 0;
}
//end::b[]

export default function Account() {
//tag::c[]
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
//end::c[]

  return (
    <div>
      //tag::d[]
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Log out</button>
      </div>
      //end::c[]
      <div className='centerContainer'>
        <div className="userInfoGrid">
          <div>Name:                     </div><div>{userInfo?.given_name} {userInfo?.family_name}</div>
          <div>Birthdate:                </div><div>{userInfo?.birthdate}                         </div>
          <div>                          </div><div>                                              </div>
          <div>                          </div><div>                                              </div>
          //tag::d[]
          <div>Authentication expires in:</div><div>{expiryTimeInSeconds} seconds                 </div>
          //end::d[]
        </div>
      </div>
    </div>
  );
}
