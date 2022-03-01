import React,{useEffect,useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useMsal,useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import {callMsGraph} from './testGraph'


export default function DashBoard() {
  // instance has passed from src/index.js , this is instance of PublicClientApplication ('@azure/msal-browser')
  // Pass throught instantce in MsalProvider (@azure/msal-react)
  const { instance, accounts, inProgress  } = useMsal();
  const isAuthenticated = useIsAuthenticated();  
  const [graphData, setGraphData] = useState(null);

  console.log(graphData)


  function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
  }

  function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
  }

  const RequestAccessToken  = () =>{
      const request = {
        ...loginRequest,
        account:accounts[0]
      }
      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response)=>{
        callMsGraph(response.accessToken).then((response) => setGraphData(response));
      }).catch((e)=>{
        instance.acquireTokenRedirect(request).then((response)=>{
          callMsGraph(response.accessToken).then(()=>setGraphData(response));
        })
      })
  }

  useEffect(()=>{
    if(accounts && accounts.length > 0){
      RequestAccessToken()
    }
  },[accounts])

  

  return (
    <div>
       {!isAuthenticated ? <button onClick={() => handleLogin(instance)}>Sign in using Redirect</button> : <button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</button>}
       <AuthenticatedTemplate>
         <p>Info account</p>
         <ul>
           <li>First Name : {graphData?.givenName}</li>
           <li>Last Name : {graphData?.surname}</li>
           <li>Email : {graphData?.userPrincipalName}</li>
           <li>Id : {graphData?.id}</li>
         </ul>
       </AuthenticatedTemplate>
       <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
       </UnauthenticatedTemplate>
       <ul>
           <li>
               <Link to='/setting'>setting for {accounts && accounts.length > 0 && accounts[0].name}</Link>
           </li>
       </ul>
       <br/>
       <Outlet />
    </div>
  )
}
