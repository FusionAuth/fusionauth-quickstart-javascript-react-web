//tag::a[]
import { useFusionAuth } from "@fusionauth/react-sdk";
//end::a[]
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Account() {
//tag::b[]
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogout, userInfo, refreshToken } = useFusionAuth();
  useEffect(() => { if (!isLoggedIn) navigate("/"); }, [isLoggedIn, navigate]);
  if (!isLoggedIn || isFetchingUserInfo) return null;
//end::b[]

  return (
    <div>
      {/*tag::c[]*/}
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Log out</button>
      </div>
      {/*end::c[]*/}
      <div className='centerContainer'>
        <div className="userInfoGrid">
          <div>Name:                     </div><div>{userInfo?.given_name} {userInfo?.family_name}</div>
          <div>Birthdate:                </div><div>{userInfo?.birthdate}                         </div>
        </div>
      </div>
    </div>
  );
}
