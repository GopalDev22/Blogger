import React, { useState } from "react";
import "./header.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <main className="header">
      {window.innerWidth < 768 ? (
        <section className="sec-mobile">
          <section className="header-mobile">
            <a href="/" className="logo">
              <h1>Blogger</h1>
            </a>

            {!showHeader ? (
              <BsThreeDotsVertical
                onClick={() => setShowHeader(true)}
                className="icon-open"
              />
            ) : (
              <GrClose
                onClick={() => setShowHeader(false)}
                className="icon-open"
              />
            )}
          </section>
          {showHeader && (
            <ul className="navbar">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/lifestyle">Lifestyle</a>
              </li>
              <li>
                <a href="/travel">Travels</a>
              </li>
              <li>
                <a href="/about">About me</a>
              </li>
            </ul>
          )}
        </section>
      ) : (
        <>
          <section>
            <a href="/" className="logo">
              <h1>Blogger</h1>
            </a>
          </section>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/lifestyle">Lifestyle</a>
            </li>
            <li>
              <a href="/travel">Travels</a>
            </li>
            <li>
              <a href="/about">About me</a>
            </li>
          </ul>
        </>
      )}
    </main>
  );
};

export default Header;
