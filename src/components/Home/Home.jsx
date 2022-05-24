import React from "react";
import "./styles/styles.css";

import workspace from "../../assets/images/workspace.jpg";

const Home = () => {
  return (
    <section className="home">
      <aside>
        <h1>Scott</h1>
        <h1 className="last">Martel</h1>
        <hr />
        <h2>
          Web <span className="lastDev">Developer</span>
        </h2>
      </aside>
      <img className="background" src={workspace} alt="" />
    </section>
  );
};

export default Home;
