import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Routing setup for the app */}
      <Routes>
        {" "}
        {/*it will ensure there is only one route that matches the path is rendered in ui */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
