import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";
import { customPath } from "./utils";
import { PrivateRoute } from "./commont/PrivateRoute";
import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";

// const BasicLayout = React.lazy(() => import("./Layouts/BasicLayout"));
const Login = React.lazy(() => import("./pages/Login"));
const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SettingPage = React.lazy(() => import("./pages/SettingPage"));
const RecordAudio = React.lazy(() => import("./pages/RecordAudio"));
const UploadAudio = React.lazy(() => import("./pages/UploadAudio"));
const UploadDocument = React.lazy(() => import("./pages/UploadDocument"));
const DictateDocument = React.lazy(() => import("./pages/DictateDocument"));
const TestLayout = React.lazy(() => import("./pages/TestLayoutReact"));

function App(props) {
  const { instance, accounts } = useMsal();
  const RequestAccessToken = () => {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };
    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        localStorage.setItem("accessToken_MS", response.accessToken);
        // callMsGraph(response.accessToken).then((response) => setGraphData(response));
      })
      .catch((e) => {
        instance.acquireTokenRedirect(request).then((response) => {
          localStorage.setItem("accessToken_MS", response.accessToken);
          // callMsGraph(response.accessToken).then(()=>setGraphData(response));
        });
      });
  };

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      RequestAccessToken();
    }
  }, [accounts]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={customPath("/login")}
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          index
          path={customPath("/")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <DashBoard />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/record-audio")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <RecordAudio />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/upload-audio")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <UploadAudio />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/upload-document")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <UploadDocument />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/dictate-document")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <DictateDocument />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/setting")}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<>Loading...</>}>
                <BasicLayout>
                  <SettingPage />
                </BasicLayout>
              </React.Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={customPath("/test-layout")}
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BasicLayout>
                <TestLayout />
              </BasicLayout>
            </React.Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
