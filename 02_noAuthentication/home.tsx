import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="titlebar">
        <button className='button' onClick={() => navigate("/account")}>Log in</button>
      </div>
      <div className='centerContainer'>
        <div>Log in to request your information</div>
      </div>
    </div>
  );
};
