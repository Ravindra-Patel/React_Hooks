import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  let [data, setData] = useState("");
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);

  //will be rendered on every state change
  // console.log("EffectTutrial rendered");

  //1. Renders on every state change
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => {
  //         setData(response.data[count].email);
  //         console.log("API was called");
  //       });
  //   });

  //2. Renders only One time because the dependency array is empty
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => {
  //         setData(response.data[count].email);
  //         console.log("API was called");
  //       });
  //   }, []);

  //3. Renders only when the state of the mentioned array of dependency state is changed
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
        console.log("API was called");
      });

    return () => {
      setData("");
      console.log("Clean the data");
      // console.log(data);
    };
  }, [count]);

  return (
    <div
      style={{
        paddingBottom: "30px",
        marginBottom: "20px",
        borderBottom: "2px solid green",
      }}
    >
      <h1>3. useEffect Examples</h1>
      {toggle && <h1>{data}</h1>} <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here for Next Character
      </button>
      <button
        onClick={() => {
          setToggle((prevState) => !prevState);
        }}
      >
        Show/Hide Name
      </button>
    </div>
  );
};

export default EffectTutorial;
