import React,{useEffect,useState} from 'react'
import './style.scss'
import TabNavigate from '../../components/TabNavigate'

import { Link, Outlet } from 'react-router-dom'
import { useMsal,useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import {callMsGraph} from './testGraph'
import { useNavigate } from 'react-router-dom';


export default function DashBoard() {


  // // instance has passed from src/index.js , this is instance of PublicClientApplication ('@azure/msal-browser')
  // // Pass throught instantce in MsalProvider (@azure/msal-react)
  // const navigate = useNavigate();
  // const { instance, accounts, inProgress  } = useMsal();
  // const isAuthenticated = useIsAuthenticated();  
  // const [graphData, setGraphData] = useState(null);

  
  // useEffect(() => {
  //   if(isAuthenticated){
  //     navigate('/setting')
  //   }else{
  //     navigate("/")
  //   }
  // },[isAuthenticated,navigate])



  // function handleLogin(instance) {
  //   instance.loginRedirect(loginRequest).catch(e => {
  //       console.error(e);
  //   });
  // }

  // function handleLogout(instance) {
  //   instance.logoutRedirect().catch(e => {
  //       console.error(e);
  //   });
  // }

  // const RequestAccessToken  = () =>{
  //     const request = {
  //       ...loginRequest,
  //       account:accounts[0]
  //     }
  //     // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  //     instance.acquireTokenSilent(request).then((response)=>{
  //       callMsGraph(response.accessToken).then((response) => setGraphData(response));
  //     }).catch((e)=>{
  //       instance.acquireTokenRedirect(request).then((response)=>{
  //         callMsGraph(response.accessToken).then(()=>setGraphData(response));
  //       })
  //     })
  // }

  // useEffect(()=>{
  //   if(accounts && accounts.length > 0){
  //     RequestAccessToken()
  //   }
  // },[accounts])

  

  return (
    <div className="dashboard-page">
      <h1 className="page-title-s2ix title-dashboard">Create New Translation</h1>

      <TabNavigate />
      <div className="list-function">
        <div className="item-function-wrap">
          <Link className="item-function" to='/myriad_v2_components/record-audio'>
            <span>Record New Audio</span>
            <img src="images/record-icon-big.svg" alt="" />
          </Link>
        </div>
        <div className="item-function-wrap">
          <Link className="item-function" to="/myriad_v2_components/upload-audio">
            <span>Upload New Audio</span>
            <img src="images/upload-icon-big.svg" alt="" />
          </Link>
        </div>
        <div className="item-function-wrap">
          <Link className="item-function" to="/myriad_v2_components/upload-document">
            <span>Upload New Document</span>
            <img src="images/upload-document-icon-big.svg" alt="" />
          </Link>
        </div>
        <div className="item-function-wrap">
          <Link className="item-function" to="/myriad_v2_components/dictate-document">
            <span>Dictate New Document</span>
            <img src="images/dictate-document-icon-big.svg" alt="" />
          </Link>
        </div>
      </div>
       {/* {!isAuthenticated ? <button onClick={() => handleLogin(instance)}>Sign in using Redirect</button> : <button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</button>}
       <AuthenticatedTemplate>
         <p>Info account</p>
         <ul>
           <li>First Name : {graphData ? graphData.givenName : "NOT DISPLAY BECAUSE CALL API FAIL WITH HTTP (CORS)"}</li>
           <li>Last Name : {graphData ? graphData.surname : "NOT DISPLAY BECAUSE CALL API FAIL WITH HTTP (CORS)"}</li>
           <li>Email : {graphData ? graphData.userPrincipalName : "NOT DISPLAY BECAUSE CALL API FAIL WITH HTTP (CORS)"}</li>
           <li>Id : {graphData ? graphData.id : "NOT DISPLAY BECAUSE CALL API FAIL WITH HTTP (CORS)"}</li>
         </ul>
       </AuthenticatedTemplate>
       <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
       </UnauthenticatedTemplate>
       <ul>
         <AuthenticatedTemplate>
          <li>
              <Link to='/setting'>setting for {accounts && accounts.length > 0 && accounts[0].name}</Link>
           </li>
         </AuthenticatedTemplate>
          
       </ul>
       <br/>
       <Outlet /> */}
    </div>
  )
}
