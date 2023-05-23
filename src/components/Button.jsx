import React, { forwardRef, useImperativeHandle, useState } from "react";

//Button component uses forwardRef to allow the ref prop to be allowd in ImperrativeHandle COmponent
//where props, ref are the props in that order only

const Button = forwardRef((props, ref) => {
  let [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
