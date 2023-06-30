import React, { forwardRef, useImperativeHandle, useState } from "react";

//Button component uses forwardRef to allow the ref prop to be allowd in ImperativeHandle Component
//where props, ref are the props in that order only
const Button = forwardRef((props, ref) => {
  let [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button onClick={handleToggle}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
