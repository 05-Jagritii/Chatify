import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore.js";
import PageLoader from "./components/PageLoader";
import {Toaster} from "react-hot-toast";

function App() {
 
  const {checkAuth, isCheckingAuth, authUser} = useAuthStore()

  useEffect(()=>{
    checkAuth()

  },[checkAuth])

  console.log({authUser});


  if(isCheckingAuth) return <PageLoader />;


  return (

    
    <div className="h-screen w-screen bg-slate-900 relative overflow-hidden">


      {/* Dotted grid */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]
    bg-[size:20px_20px]" />


    {/* Micro shapes */}
  <div className="absolute top-16 left-20 w-20 h-20 border border-white/10 rounded-full" />
  <div className="absolute top-32 right-40 w-28 h-14 border border-white/10 rounded-lg rotate-12" />
  <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-white/10 rounded-xl rotate-6" />
  <div className="absolute top-1/2 right-24 w-24 h-12 border border-white/10 rounded-full -rotate-6" />
  <div className="absolute bottom-40 left-1/4 w-14 h-14 border border-white/10 rounded-lg" />
  <div className="absolute bottom-24 right-1/3 w-20 h-10 border border-white/10 rounded-full rotate-3" />
  <div className="absolute bottom-1/3 right-16 w-16 h-16 border border-white/10 rounded-full" />
  <div className="absolute top-20 right-1/4 w-12 h-12 border border-white/10 rounded-xl rotate-12" />
  

  {/* Indigo glow */}
  <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] 
    bg-indigo-500/25 rounded-full blur-[120px]" />

  {/* Rose glow */}
  <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] 
    bg-rose-500/20 rounded-full blur-[120px]" />



    <Routes>
      <Route path="/" element={authUser ? <ChatPage/> : <Navigate to="/login"/>} />
      <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to={"/"}/>} />
      <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to={"/"}/>} />
    </Routes>

    <Toaster/>

    </div>
  );
}

export default App;
