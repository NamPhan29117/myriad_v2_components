import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const BasicLayout = React.lazy(() => import("./Layouts/BasicLayout"));
const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SettingPage = React.lazy(() => import("./pages/SettingPage"));
const RecordAudio = React.lazy(() => import("./pages/RecordAudio"));
const UploadAudio = React.lazy(() => import("./pages/UploadAudio"));
const UploadDocument = React.lazy(() => import("./pages/UploadDocument"));
const DictateDocument = React.lazy(() => import("./pages/DictateDocument"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/myriad_v2_components"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BasicLayout />
            </React.Suspense>
          }
        >
          <Route
            index
            path="/myriad_v2_components"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DashBoard />
              </React.Suspense>
            }
          />
          <Route
            path="/myriad_v2_components/record-audio"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <RecordAudio />
              </React.Suspense>
            }
          />
          <Route
            path="/myriad_v2_components/upload-audio"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <UploadAudio />
              </React.Suspense>
            }
          />
          <Route
            path="/myriad_v2_components/upload-document"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <UploadDocument />
              </React.Suspense>
            }
          />
          <Route
            path="/myriad_v2_components/dictate-document"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DictateDocument />
              </React.Suspense>
            }
          />
          <Route
            path="/myriad_v2_components/setting"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <SettingPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;