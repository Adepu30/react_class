import React, { useState } from "react";

import Button from "./components/shared/Button.js";
import Cal from "./components/tests/Cal.js";
import "./components/shared/Button.css";
import "./components/tests/Cal.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const table = (val) => {
    let i = 1;
    let result = [];
    while (i <= 10) {
      result.push(`${b} * ${i} = ${b * i}`);
      i++;
    }
    return result;
  };

  const onHandleaChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setA("");
    } else {
      setA(parseInt(value));
    }
  };

  const onHandlebChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setB("");
    } else {
      setB(parseInt(value));
    }
  };

  return (
    <div>
      <div className="body">
        <input type="number" value={a} onChange={onHandleaChange}></input>
        <input type="number" value={b} onChange={onHandlebChange}></input>

        <Cal
          className="addition"
          a={a === "" ? 0 : a}
          b={b === "" ? 0 : b}
          table={table}
        ></Cal>
      </div>
    </div>
  );
}

export default App;
