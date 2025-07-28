import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  FusionAuthProvider,
  FusionAuthProviderConfig,
} from "@fusionauth/react-sdk";

const config: FusionAuthProviderConfig = {
  clientId: "393d8db8-cc25-4920-914a-ae5f7d05586c",
  redirectUri: "https://fusionauth-quickstart-javascript-react-web.cashcat.dev",
  postLogoutRedirectUri: "https://fusionauth-quickstart-javascript-react-web.cashcat.dev",
  serverUrl: "https://auth.cashcat.dev",
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  onRedirect: (state?: string) => {
    console.log(`Redirect happened with state value: ${state}`);
  },
  scope: 'openid email profile offline_access'
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FusionAuthProvider {...config}>
        <App />
      </FusionAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
