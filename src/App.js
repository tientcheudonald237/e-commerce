import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import SignInClient from "./components/Login/SignInClient";
import SignUpClient from "./components/Login/SignUpClient";
import SignInVendeur from "./components/Login/SignInVendeur";
import SignUpVendeur from "./components/Login/SignUpVendeur";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/sign-in-client" element={<SignInClient/>} />
          <Route path="/sign-up-client" element={<SignUpClient/>} />
          <Route path="/sign-in-vendeur" element={<SignInVendeur/>} />
          <Route path="/sign-up-vendeur" element={<SignUpVendeur/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
