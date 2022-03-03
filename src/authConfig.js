export const msalConfig = {
    auth: {
      clientId: "f7d17889-0f41-4dd7-96eb-a847622699bf",
      authority: "https://login.microsoftonline.com/1fd983f3-dc44-42f8-ad66-7972e9d94659", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://namphan29117.github.io/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com"
  };