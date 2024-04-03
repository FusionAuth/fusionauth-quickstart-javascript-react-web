/**
 *  FusionAuthConfig {
 *    // REQUIRED
 *    clientID: string;
 *    serverUrl: string;
 *    redirectUri: string;
 *
 *    // OPTIONS
 *    onRedirectSuccess?: (state?: string) => void;
 *    onRedirectFail?: (error: any) => void;
 *    scope?: string;
 *    shouldAutoRefreshAccessToken?: boolean;
 *    accessTokenExpireWindow?: number // this value is in seconds
 *    accessTokenExpireCookieName?: string;
 *
 *    // PATHS
 *    mePath?: string;
 *    loginPath?: string;
 *    logoutPath?: string;
 *    registerPath?: string;
 *    tokenRefreshPath?: string;
 *  }
 */

const baseConfig = {
  clientID: "e9fdb985-9173-4e01-9d73-ac2d60d1dc8e",
  redirectUri: "http://localhost:3000",
  shouldAutoRefreshAccessToken: true,
  onRedirectSuccess: (state) => {
    console.log(`Redirect was successful with state value: ${state}`)
  },
  onRedirectFailure: (error) => {  
    alert(`Redirect failed with error: ${error}`)
  },
};

const configWithFusionAuthServer = {
  ...baseConfig,
  serverUrl: "http://localhost:9011",
};

const configWithMyServer = {
  ...baseConfig,
  serverUrl: "your-server-url",
};

export { configWithFusionAuthServer, configWithMyServer };
