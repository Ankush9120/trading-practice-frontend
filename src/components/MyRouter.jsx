import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationM from "./NavigationM";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Actions from "../pages/Actions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Offline from "../pages/Offline";

const MyRouter = () => {
  const ProtectedElement = ({ children }) => {
    if (location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/offline") {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/history" element={<History />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offline" element={<Offline />} /> 
      </Routes>
      
      <ProtectedElement>
        <NavigationM />
      </ProtectedElement>
      <ToastContainer theme="colored" autoClose={100000} />
    </BrowserRouter>
  );
};

export default MyRouter;
