import React, { useRef } from "react";

//useRef: Access and Manipulate DOM elements

const RefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Ravindra</h1>
      <input type="text" placeholder="Ex..." ref={inputRef}></input>
      <button onClick={onClick}>Clear Field</button>
    </div>
  );
};

export default RefTutorial;
