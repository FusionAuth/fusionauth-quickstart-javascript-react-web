import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useNavigate, BrowserRouter } from "react-router-dom";
import { useFusionAuth, FusionAuthProvider, FusionAuthProviderConfig} from "@fusionauth/react-sdk";

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogin, startRegister } = useFusionAuth();
  useEffect(() => { if (isLoggedIn) navigate("/account"); }, [isLoggedIn, navigate]);
  if (isLoggedIn || isFetchingUserInfo) return null;
  return (
    <div>
      <div className="titlebar">
        <button className='button' onClick={() => startLogin("state-from-login")} >
          Log in
        </button>
      </div>
      <div className='centerContainer'>
        <div>Log in to request your information</div>
      </div>
    </div>
  );
};
