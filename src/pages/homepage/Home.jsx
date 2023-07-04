import React, { useState } from "react";
import men from "../../assets/cover/men-1.png";
import women from "../../assets/cover/women-1.png";
import "./home.css";
import { useNavigate } from "react-router-dom";
import addidas from "../../assets/brands/adidas.png";
import puma from "../../assets/brands/puma.png";
import nike from "../../assets/brands/nike.png";
import roadster from "../../assets/brands/rooadster.jpg";
import polo from "../../assets/brands/polo.jpg";
import peter from "../../assets/brands/peter.png";
import allen from "../../assets/brands/allen.png";
import Carousel from "../../component/Carousel";

const brands = [addidas, polo, puma, peter, nike, roadster, allen];

const Home = () => {
  const [toggleMen, setToggleMen] = useState(false);
  const [toggleWomen, setToggleWomen] = useState(false);
  const navigate = useNavigate();

  const collection = brands.map((item, index) => (
    <div key={index} className="brand-collection">
      <img src={item} alt={item} className="brand-image" />
    </div>
  ));
  return (
    <main>
      <section className="cover-container">
        <section className="cover-men">
          <img src={men} alt="men pic" onClick={() => setToggleMen(true)} />
          {toggleMen && (
            <div
              className="cover-content-men"
              onClick={() => setToggleMen(false)}
            >
              <p>
                Shop exculsive Men <br /> T-shirts
              </p>

              <div>
                <button className="btn-men" onClick={() => navigate("/men")}>
                  Shop Now
                </button>
              </div>
            </div>
          )}
        </section>
        <section className="cover-women">
          <img
            src={women}
            alt="women pic"
            onClick={() => setToggleWomen(true)}
          />
          {toggleWomen && (
            <div
              className="cover-content-women"
              onClick={() => setToggleWomen(false)}
            >
              <p>
                Shop exculsive Women <br />
                T-shirts
              </p>
              <div>
                <button
                  className="btn-women"
                  onClick={() => navigate("/women")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          )}
        </section>
      </section>
      <section className="brand-container">
        <h1 className="brand-header">Brand collection</h1>
        <div className="brand-content">{collection}</div>
        <div className="brand-content-mobile">
          <Carousel images={brands} />
        </div>
      </section>
    </main>
  );
};

export default Home;
