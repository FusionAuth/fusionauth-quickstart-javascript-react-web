import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { useState } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="titlebar">
      <button className='button'>Log in</button>
    </div>
    <div className='centerContainer'>
      <div className="center">Log in to request your information</div>
    </div>
  </StrictMode>,
)
