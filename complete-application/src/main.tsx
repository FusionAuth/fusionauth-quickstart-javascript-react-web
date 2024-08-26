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
  clientId: "47bc274b-7303-4c99-ace1-361b16927e82",
  redirectUri: "https://fusionauth-quickstart-javascript-react-web.cashcat.dev",
  postLogoutRedirectUri: "https://fusionauth-quickstart-javascript-react-web.cashcat.dev/logged-out",
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
