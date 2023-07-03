import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer";
import Home from "./pages/homepage/Home";
import Blog from "./pages/blog/Blog";
import Lifestyle from "./pages/lifestyle/lifestyle";
import Travel from "./pages/travel/Travel";
import AboutMe from "./pages/aboutme/AboutMe";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
