// External Imports
import React, { useEffect, useState } from "react";

import "../styles/components/search.css";

function Search({
  callback
}) {
  const [value, setValue] = useState("");

  useEffect(()=> {
    callback(value);
  }, [value, callback]);

  return (
    <input type="text" placeholder="Search..." onChange={(event)=> setValue(event.target.value)} className="search copy"/>
  );
}

export default Search;
