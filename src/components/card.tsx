// External Imports
import React from "react";

import { School } from "interfaces";

import { URLPrettifier } from "utilities";

import "../styles/components/card.css";

function Card(props: School) {

  const {
    INSTNM,
    CITY,
    STABBR,
    INSTURL
  } = props;

  /*
  INSTURL has formatting consistency errors requiring differing protocols
  A utility function could standardize all URL string to https://www. but would fail
  again non HTTPS protocols
  */

  return (
    <section className="card">
      <header className="card__header">
        <h4 className="card__header-title title title--sub">
          <span>{CITY}</span>
          <span>{STABBR}</span>
        </h4>
      </header>
      <h2 className="card__title title title--medium">{INSTNM}</h2>
      <a href={INSTURL} className="card__link link" target="_blank" rel="noopener noreferrer">{URLPrettifier(INSTURL)}</a>
    </section>
  );
}

export default Card;
