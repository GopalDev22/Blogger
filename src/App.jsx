import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer";
import Home from "./pages/homepage/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import AboutMe from "./pages/aboutme/AboutMe";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
