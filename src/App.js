import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";
import { customPath } from "./utils";

// const BasicLayout = React.lazy(() => import("./Layouts/BasicLayout"));
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
      <BasicLayout>
        <Routes>
          <Route
            index
            path={customPath("/")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DashBoard />
              </React.Suspense>
            }
          />
          <Route
            path={customPath("/record-audio")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <RecordAudio />
              </React.Suspense>
            }
          />
          <Route
            path={customPath("/upload-audio")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <UploadAudio />
              </React.Suspense>
            }
          />
          <Route
            path={customPath("/upload-document")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <UploadDocument />
              </React.Suspense>
            }
          />
          <Route
            path={customPath("/dictate-document")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <DictateDocument />
              </React.Suspense>
            }
          />
          <Route
            path={customPath("/setting")}
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <SettingPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;


