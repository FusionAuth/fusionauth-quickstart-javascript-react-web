//tag::a[]
import { useFusionAuth} from "@fusionauth/react-sdk";
//end::a[]
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  //tag::b[]
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogin, startRegister } = useFusionAuth();
  useEffect(() => { if (isLoggedIn) navigate("/account"); }, [isLoggedIn, navigate]);
  if (isLoggedIn || isFetchingUserInfo) return null;
  //end::b[]
  return (
    <div>
      <div className="titlebar">
        //tag::c[]
        <button className='button' onClick={() => startLogin("state-from-login")} >
        //end::c[]
          Log in
        </button>
      </div>
      <div className='centerContainer'>
        <div>Log in to request your information</div>
      </div>
    </div>
  );
};
