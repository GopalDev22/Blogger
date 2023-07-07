import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer";
import Home from "./pages/homepage/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import AboutMe from "./pages/aboutme/AboutMe";
import { AuthContextProvider } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <main className="app">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </main>
  );
};

export default App;
