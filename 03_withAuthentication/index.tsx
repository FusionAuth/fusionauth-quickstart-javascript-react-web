//tag::a[]
import { FusionAuthProvider, FusionAuthProviderConfig, useFusionAuth } from '@fusionauth/react-sdk';
//end::a[]
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import Account from './account';

//tag::b[]
const fusionAuthProviderConfig: FusionAuthProviderConfig = {
  clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: 'http://localhost:3000',
  serverUrl: 'http://localhost:9011',
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  onRedirect: (state?: string) => { console.log(`Redirect happened with state value: ${state}`); },
  scope: 'openid email profile offline_access',
};
//end::b[]

function App() {
  //tag::c[]
  const { isFetchingUserInfo } = useFusionAuth();
  if (isFetchingUserInfo) return null;
  //end::c[]
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

//tag::d[]
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FusionAuthProvider {...fusionAuthProviderConfig}>
        <App />
      </FusionAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
//end::d[]
