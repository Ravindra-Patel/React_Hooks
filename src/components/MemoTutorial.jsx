import axios from "axios";
import { useState, useEffect, useMemo } from "react";

//Used for Optimization, Improved Performance, DEcrease Latency
//Use cases:

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  //This function will be called any state is mutated in the Page i.e for every page render
  //which will have its copmutation costs
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      {/* whithout useMemo */}
      {/* <div>{findLongestName(data)}</div> */}
      <div>{getLongestName}</div>

      {/* //findLongestName func will be called with this state change if useMemo is not used. Which is not ideal */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default MemoTutorial;
