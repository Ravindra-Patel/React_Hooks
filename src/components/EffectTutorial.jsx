import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  let [data, setData] = useState("");
  let [count, setCount] = useState(0);

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
  }, [count]);

  return (
    <div>
      Hello World
      <h1>{data}</h1> <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default EffectTutorial;
