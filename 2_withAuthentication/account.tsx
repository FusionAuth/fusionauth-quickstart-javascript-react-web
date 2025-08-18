import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useFusionAuth } from "@fusionauth/react-sdk";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogout, userInfo } = useFusionAuth();
  useEffect(() => { if (!isLoggedIn) navigate("/"); }, [isLoggedIn, navigate]);
  if (!isLoggedIn || isFetchingUserInfo) return null;
  return (
    <div>
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Log out</button>
      </div>
      <div className='centerContainer'>
        {/*<button className="button">Show my info</button>*/}
        <br />
        <div className="userInfoGrid">
            <div>Name:</div>
            <div>{userInfo?.given_name} {userInfo?.family_name}</div>
            <div>Email:</div>
            <div>{userInfo?.email}</div>
            <div>Birthdate:</div>
            <div>{userInfo?.birthdate}</div>
          </div>
      </div>
    </div>
  );
}
