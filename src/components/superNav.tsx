// External Imports
import React from "react";

import "../styles/components/superNav.css";

function SuperNav() {

  return (
    <section className="superNav">
      <h1 className="title title--logo">YourUni</h1>
      <nav className="superNav__links">
        <a href="/product" className="link link--active">Product</a>
        <a href="/download" className="link">Download</a>
        <a href="/pricing" className="link">Pricing</a>
      </nav>
    </section>
  );
}

export default SuperNav;
