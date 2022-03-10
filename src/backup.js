// import React from "react";
// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const BasicLayout = React.lazy(() => import("./Layouts/BasicLayout"));
// const DashBoard = React.lazy(() => import("./pages/DashBoard"));
// const NotFound = React.lazy(() => import("./pages/NotFound"));
// const SettingPage = React.lazy(() => import("./pages/SettingPage"));
// const RecordAudio = React.lazy(() => import("./pages/RecordAudio"));
// const UploadAudio = React.lazy(() => import("./pages/UploadAudio"));
// const UploadDocument = React.lazy(() => import("./pages/UploadDocument"));
// const DictateDocument = React.lazy(() => import("./pages/DictateDocument"))

// function App() {
//   return (
//     <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <React.Suspense fallback={<>Loading...</>}>
//                 <BasicLayout />
//               </React.Suspense>
//             }
//           >
//             <Route
//               index
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <DashBoard />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/record-audio"
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <RecordAudio />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/upload-audio"
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <UploadAudio />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/upload-document"
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <UploadDocument />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/dictate-document"
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <DictateDocument />
//                 </React.Suspense>
//               }
//             />
//             <Route
//               path="/setting"
//               element={
//                 <React.Suspense fallback={<>Loading...</>}>
//                   <SettingPage />
//                 </React.Suspense>
//               }
//             />
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes> 
//     </BrowserRouter>
//   );
// }

// export default App;



// import React from 'react'
// import Footer from '../components/Footer'
// import MenuHeader from '../components/MenuHeader'
// import Sidebar from '../components/Sidebar'
// import { Link, Outlet } from 'react-router-dom'

// export default function BasicLayout(props) {
//   return (
//     <div className="basic-layout">
//         <MenuHeader/>
//           <div className="container-layout">
//             <Sidebar />
//             <div className="main-content">
//               <Outlet />
            
//             </div>
//           </div>
//         <Footer />
//     </div>
//   )
// }
