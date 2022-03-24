import React, { useEffect } from "react";
import "./style.scss";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { useNavigate } from "react-router-dom";
import { customPath } from "../../utils";

export default function Login() {
  // instance has passed from src/index.js , this is instance of PublicClientApplication ('@azure/msal-browser')
  // Pass throught instantce in MsalProvider (@azure/msal-react)
  const navigate = useNavigate();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  console.log("THE THIRST login", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(customPath("/"));
    }
  }, [isAuthenticated, navigate]);

  function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  }

  return (
    <div className="login-container">
      <div className="login-wrap">
        <h4 className="page-title-s2ix login-title">
          You are not logged into Microsoft account
        </h4>
        <span className=".heading-s2ix login-sub">
          Please click button below
        </span>
        <button
          className="button btn-login"
          onClick={() => handleLogin(instance)}
        >
          Login with Microsoft account
        </button>
      </div>
    </div>
  );
}
