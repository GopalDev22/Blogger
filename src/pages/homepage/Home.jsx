import React from "react";
import men from "../../assets/cover/men-1.png";
import women from "../../assets/cover/women-1.png";
import "./home.css";

const Home = () => {
  return (
    <main>
      <section className="cover-container">
        <section className="cover-men">
          <img src={men} alt="men pic" />
          <div className="cover-content-men">
            <p>Shop exculsive Men T-shirts</p>
            <div>
              <button className="btn-men">Shop Now</button>
            </div>
          </div>
        </section>
        <section className="cover-women">
          <img src={women} alt="women pic" />
          <div className="cover-content-women">
            <p>Shop exculsive Women T-shirts</p>
            <div>
              <button className="btn-women">Shop Now</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
