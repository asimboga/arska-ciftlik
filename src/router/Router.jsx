import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Production from "../pages/Production";
import Products from "../pages/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="production" element={<Production />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
