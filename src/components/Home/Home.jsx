import React from "react";
import "./styles/styles.css";
import laptop from "../../assets/images/laptop.png";
const Home = () => {
  return (
    <section class="home">
      <aside>
        <h1>Scott</h1>
        <h1 class="last">Martel</h1>
        <hr />
        <h2>
          Web <span className="last">Developer</span>
        </h2>
      </aside>
      <img src={laptop} />
    </section>
  );
};

export default Home;
