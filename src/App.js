import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";

const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SettingPage = React.lazy(() => import("./pages/SettingPage"));

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DashBoard />
              </React.Suspense>
            }
          >
            <Route
              path="/setting"
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  <SettingPage />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes> 
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
