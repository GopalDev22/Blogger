import React, { useState } from "react";
import "./header.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <main className="header">
      {window.innerWidth < 768 ? (
        <section className="sec-mobile">
          <section className="header-mobile">
            <a href="/" className="logo">
              <h1>T-shirt Factory</h1>
            </a>
            <div className="cart-mobile">
              <BiShoppingBag />
              <span className="cart-count">8</span>
            </div>

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
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>

              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          )}
        </section>
      ) : (
        <>
          <section>
            <a href="/" className="logo">
              <h1>T-shirt Factory</h1>
            </a>
          </section>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li className="cart-container">
              <BiShoppingBag className="cart-icon" />
              <span className="cart-count">8</span>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </>
      )}
    </main>
  );
};

export default Header;
