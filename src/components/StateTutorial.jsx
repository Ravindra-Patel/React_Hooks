import React, { useState } from "react";

//The componenets will re-render the state snapshot when the state values are mutated

const StateTutorial = () => {
  let [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Ravindra");

  const clickHandler = () => {
    setCounter((counter = counter + 1));
  };

  const inputHandler = (event) => {
    const newValue = event.target.value;
    if (newValue === "") {
      setInputValue("Enter Text");
    } else {
      setInputValue(newValue);
    }
  };

  return (
    <div
      style={{
        paddingBottom: "30px",
        marginBottom: "20px",
        border: "2px solid green",
      }}
    >
      <h1>1. useState Examples</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <h3
          style={{
            paddingRight: "20px",
          }}
        >
          {counter}
        </h3>
        <button onClick={clickHandler}>Increment</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <input placeholder="Enter Text" onChange={inputHandler}></input>
        <h3
          style={{
            paddingLeft: "20px",
          }}
        >
          {inputValue}
        </h3>
      </div>
    </div>
  );
};

export default StateTutorial;
