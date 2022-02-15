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
          <Route path="/:category/search/:keyword" element={<Catalog />} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="/:category" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
