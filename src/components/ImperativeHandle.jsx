import React, { useRef } from "react";
import Button from "./Button";

//useImperativeHandle hook is used to alter/mutate the state of the child components
//ref prop is used for Button component because Button component has useImperativeHandle
const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
