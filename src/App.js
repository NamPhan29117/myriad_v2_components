import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const DashBoard  = React.lazy(()=>import("./pages/DashBoard"));
const NotFound = React.lazy(()=>import("./pages/NotFound")); 
const SettingPage = React.lazy(()=>import("./pages/SettingPage")); ;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<>Loading...</>}>
            <DashBoard />
          </React.Suspense>
        }>
          <Route path="/setting" element={
            <React.Suspense fallback={<>Loading...</>}>
             <SettingPage />
           </React.Suspense>
          }/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
