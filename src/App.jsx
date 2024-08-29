import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Container as BootstrapContainer } from "react-bootstrap";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <BootstrapContainer fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BootstrapContainer>
      <Footer />
    </div>
  );
};

export default App;
