import React, { useState } from "react";
import "./header.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { BiShoppingBag } from "react-icons/bi";
import { UserAuth } from "../../context/AuthContext";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const { user, logOut, setOpenModal } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
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
                {user ? (
                  <button onClick={handleLogout}>logout</button>
                ) : (
                  <button onClick={() => setOpenModal(true)}>Login</button>
                )}
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
              {user ? (
                <button onClick={handleLogout}>logout</button>
              ) : (
                <button onClick={() => setOpenModal(true)}>Login</button>
              )}
            </li>
          </ul>
        </>
      )}
    </main>
  );
};

export default Header;
