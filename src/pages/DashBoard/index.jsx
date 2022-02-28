import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { useIsAuthenticated } from "@azure/msal-react";


export default function DashBoard() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();  


  function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
  }

  function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

  return (
    <div>
        {!isAuthenticated ? <button onClick={() => handleLogin(instance)}>Sign in using Popup</button> : <button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Popup</button>}
       <ul>
           <li>
               <Link to='/setting'>setting</Link>
           </li>
       </ul>
       <br/>
       <Outlet />
    </div>
  )
}
