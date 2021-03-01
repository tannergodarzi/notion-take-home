// External Imports
import React from "react";

import "../styles/components/hero.css";

function Hero() {

  return (
    <section className="hero">
      <header className="hero__header">
        <h1 className="title title--large">Find the university that’s right for you.</h1>
        <h2 className="title title--small">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</h2>
      </header>

      <picture className="hero__aside">
        <img src="images/hero.png" srcSet="images/hero.png 1x, images/hero@2x.png 2x" alt="A person standing on a rock overseeing the ocean during a storm" />
      </picture>
    </section>
  );
}

export default Hero;
