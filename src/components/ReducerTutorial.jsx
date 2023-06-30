import React, { useReducer } from "react";

//Alternative to the useState Hook. Performs similar function.
//Specific benefit: use when we want to mutate more than 1 states on a specific event

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return { count: state.count - 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

//Commented code is used to peform the same function without the useReducer Hook
const ReducerTutorial = () => {
  console.log("ReducerTutorial rendered");
  //   let [count, setCount] = useState(0);
  //   let [showText, setShowText] = useState(true);

  //useReducer Hook
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div
      style={{
        paddingBottom: "30px",
        marginBottom: "20px",
        borderBottom: "2px solid green",
      }}
    >
      <h1>2. useReducer Examples</h1>

      {/* <h3>{count}</h3> */}
      <h3>{state.count}</h3>

      {/* Performs 2 state mutations on single event */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Increment Value
      </button> */}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Increment Value
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement Value
      </button>

      {/* {showText && <p>This is a Text</p>} */}
      {state.showText && <p>This is a Text</p>}
    </div>
  );
};

export default ReducerTutorial;
