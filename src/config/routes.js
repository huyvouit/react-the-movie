import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Catalog from "../pages/catalog";
import Detail from "../pages/detail";
import Home from "../pages/home";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
