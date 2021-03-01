// External Imports
import React, { useEffect, useState } from "react";

// Interfaces
import { School } from "interfaces";

// Utilities and services
import { getAllScoreCards } from "services/scorecards";
import { stringInObject } from "utilities";

// UI Imports
import Card from "components/card";
import Hero from "components/hero";
import Search from "components/search";
import SuperNav from "components/superNav";

// CSS
import "../styles/library.css";
import "../styles/grid.css";

import "../styles/pages/product.css";

function ProductPage() {
  const [scoreCards, setScoreCards] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    getAllScoreCards().then((results: any) => setScoreCards(results));
  }, []);

  useEffect(()=> {
    if (query.length === 0) {
      setFilteredResults(scoreCards);
    }
    const results = scoreCards.filter((value)=> stringInObject(value, query));
    setFilteredResults(results);
  }, [query, scoreCards]);

  return (
    <main className="product-page">
      <SuperNav />
      <Hero />
      <section className="product-page__navigation">
        <Search callback={setQuery} />
      </section>
      <section className="grid">
        {filteredResults.map((value: School, index: any)=> <Card {...value} key={value.UNITID} />)}
      </section>
    </main>
  );
}

export default ProductPage;
