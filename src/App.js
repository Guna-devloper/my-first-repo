import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Review from "./Components/Review";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Review />} />


      </Routes>
            <Footer />
            
    </BrowserRouter>
    
  );
}

export default App;
