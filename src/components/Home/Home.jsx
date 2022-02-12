import React from "react";
import "./styles/styles.css";
import laptop from "../../assets/images/laptop.png";
const Home = () => {
  return (
    <section class="home">
      <aside>
        <h1>Scott</h1>
        <h1 className="last">Martel</h1>
        <hr />
        <h2>
          Web <span className="lastDev">Developer</span>
        </h2>
      </aside>
      <img className="background" src={laptop} />
    </section>
  );
};

export default Home;
