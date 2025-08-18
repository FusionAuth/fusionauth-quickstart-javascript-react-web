import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { useState } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="titlebar">
      <button className='button'>Log out</button>
    </div>
    <div className='centerContainer'>
      <button className="button">Show my info</button>
    </div>
  </StrictMode>
)
