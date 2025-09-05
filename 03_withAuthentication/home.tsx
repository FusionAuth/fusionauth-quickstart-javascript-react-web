//tag::a[]
import { useFusionAuth} from "@fusionauth/react-sdk";
//end::a[]
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//tag::b[]
export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogin, startRegister } = useFusionAuth();
  useEffect(() => { if (isLoggedIn) navigate("/account"); }, [isLoggedIn, navigate]);
  if (isLoggedIn || isFetchingUserInfo) return null;
  return (
//end::b[]
    <div>
{/*tag::c[]*/}
      <div className="titlebar">
        <button className='button' onClick={() => startLogin("state-from-login")} >
          Log in
{/*end::c[]*/}
        </button>
      </div>
      <div className='centerContainer'>
        <div>Log in to request your information</div>
      </div>
    </div>
  );
};
