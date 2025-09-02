import { useFusionAuth } from "@fusionauth/react-sdk";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const { isLoggedIn, isFetchingUserInfo, startLogout, userInfo, refreshToken } = useFusionAuth();
  useEffect(() => { if (!isLoggedIn) navigate("/"); }, [isLoggedIn, navigate]);
  if (!isLoggedIn || isFetchingUserInfo) return null;

  //tag::a[]
  const [newUserInfo, setNewUserInfo] = useState({'given_name': '', 'family_name': '', 'birthdate': ''});
  async function getUserInfo() {
    const response = await fetch('http://localhost:9011/app/me', {
      'method': 'GET',
      'credentials': 'include',
      'headers': { 'Accept': 'application/json' }
    });
    const info = await response.json();
    setNewUserInfo(info);
  }
  //end::a[]

  return (
    <div>
      <div className="titlebar">
        <span className='white'>{userInfo?.email}</span>
        <button className='button' onClick={() => startLogout()}>Log out</button>
      </div>
      <div className='centerContainer'>
        {/*tag::b[]*/}
        <div className="userInfoGrid">
          <div>Name:                     </div><div>{newUserInfo?.given_name} {newUserInfo?.family_name}</div>
          <div>Birthdate:                </div><div>{newUserInfo?.birthdate}                         </div>
        </div>
        <br />
        <div>
          <button className="button" onClick={getUserInfo}>Refresh user info</button>
        </div>
        {/*end::b[]*/}
      </div>
    </div>
  );
}
