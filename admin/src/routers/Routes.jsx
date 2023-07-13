import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Page from "../pages/Page";

function Routers() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </>
  );
}

export default Routers;
