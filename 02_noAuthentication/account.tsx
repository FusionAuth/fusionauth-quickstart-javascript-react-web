import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="titlebar">
        <button className='button' onClick={() => navigate("/")}>Log out</button>
      </div>
      <div className='centerContainer'>
        <br />
        <div className="userInfoGrid">
          <div>Name:</div>
          <div></div>
          <div>Email:</div>
          <div></div>
          <div>Birthdate:</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
