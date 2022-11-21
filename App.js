import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  function inputNum(e) {
    if (curState.includes(".") && e.target.innerText === ".") {
      return;
    }

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  }

  function operatorType(e) {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") {
      return;
    }
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  }

  function equals(e) {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    let calculate;

    if (operator === "&divide") {
      calculate = String(parseFloat(preState) / parseFloat(curState));
    }

    if (operator === "+") {
      calculate = String(parseFloat(preState) + parseFloat(curState));
    }

    if (operator === "-") {
      calculate = String(parseFloat(preState) - parseFloat(curState));
    }

    if (operator === "&times;") {
      calculate = String(parseFloat(preState) * parseFloat(curState));
    }

    setCurState(calculate);
  }

  function reset() {
    setPreState("");
    setCurState("");
  }

  return (
    <body>
      <div className="calculator">
        <input type="text" className="screen" value={curState} disabled />
        <div className="keys">
          <button
            type="button"
            className="operators"
            value="+"
            onClick={operatorType}
          >
            +
          </button>
          <button
            type="button"
            className="operators"
            value="-"
            onClick={operatorType}
          >
            -
          </button>
          <button
            type="button"
            className="operators"
            value="*"
            onClick={operatorType}
          >
            &times;
          </button>
          <button
            type="button"
            className="operators"
            value="/"
            onclick={operatorType}
          >
            &divide;
          </button>

          <button
            type="button"
            className="numbers"
            value="7"
            onClick={inputNum}
          >
            7
          </button>

          <button
            type="button"
            className="numbers"
            value="8"
            onClick={inputNum}
          >
            8
          </button>
          <button
            type="button"
            className="numbers"
            value="9"
            onClick={inputNum}
          >
            9
          </button>
          <button
            type="button"
            className="numbers"
            value="4"
            onClick={inputNum}
          >
            4
          </button>
          <button
            type="button"
            className="numbers"
            value="5"
            onClick={inputNum}
          >
            5
          </button>
          <button
            type="button"
            className="numbers"
            value="6"
            onClick={inputNum}
          >
            6
          </button>
          <button
            type="button"
            className="numbers"
            value="1"
            onClick={inputNum}
          >
            1
          </button>
          <button
            type="button"
            className="numbers"
            value="2"
            onClick={inputNum}
          >
            2
          </button>
          <button
            type="button"
            className="numbers"
            value="3"
            onClick={inputNum}
          >
            3
          </button>

          <button
            type="button"
            className="numbers"
            value="0"
            onClick={inputNum}
          >
            0
          </button>

          <button
            type="button"
            className="decimal"
            value="."
            onClick={inputNum}
          >
            .
          </button>

          <button type="button" className="reset" value="AC" onClick={reset}>
            AC
          </button>

          <button type="button" className="equals" value="=" onClick={equals}>
            =
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
