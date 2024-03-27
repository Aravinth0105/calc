import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [savedResults, setSavedResults] = useState([]);

  const [currentCalculation, setCurrentCalculation] = useState(""); // Track current calculation

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const newResult = eval(display);
        setResult(newResult);
        setDisplay(newResult.toString());
        const fullCalculation = `${currentCalculation} = ${newResult}`; 
        saveResultToLocalStorage(fullCalculation); 
        setCurrentCalculation(""); 
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
      setCurrentCalculation("");
    } else {
      setDisplay(display + value);
      setCurrentCalculation(currentCalculation + value); // Accumulate current input
    }
  };

  const saveResultToLocalStorage = (fullCalculation) => {
    try {
      const savedResultsCopy = [...savedResults];
      savedResultsCopy.push(fullCalculation);
      setSavedResults(savedResultsCopy);
      localStorage.setItem("savedResults", JSON.stringify(savedResultsCopy));
    } catch (error) {
      console.error("Error saving result:", error);
    }
  };

  useEffect(() => {
    const savedResultsFromLocalStorage = JSON.parse(localStorage.getItem("savedResults")) || [];
    setSavedResults(savedResultsFromLocalStorage);
  }, []);

  return (
    <div className="width">
      <div className={`calculator `}>
        <h1 style={{ textAlign: "center", color: "red" }}>Calculator</h1>
        <div className="display">
          <input type="text" value={display} disabled />
          <div className="result">{result}</div>
        </div>
        <div className={`buttons `}>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>
          <button style={{ backgroundColor: " rgb(189, 202, 231)" }} onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button style={{ backgroundColor: " rgb(189, 202, 231)" }} onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="saved-results">
        <h2>Recent Results</h2>
        <ul>
          {savedResults.map((savedResult, index) => (
            <li key={index}>{savedResult}</li>
          ))}
        </ul>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
