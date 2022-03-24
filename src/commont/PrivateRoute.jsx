import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { useIsAuthenticated } from "@azure/msal-react";
import { customPath } from "../utils";

export const PrivateRoute = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);
  // check user logged
  // if true show rote
  // if false redirect login page

  // console.log("isAuthenticated", localStorage.getItem("isLogged"));
  const isAuthenticated = useIsAuthenticated();
  console.log("THE FIRST prv", isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isAuthenticated]);

  console.log("THE SECOND prv", isLogged);

  return isLogged ? children : <Navigate to={customPath("/login")} replace />;
  // return children;
};
