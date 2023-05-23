import React, { useEffect, useLayoutEffect, useRef } from "react";

//useLayoutEffect is renderde before useEffect.
//Usecase: When you want to render the page of perform actions before anything is printed on the screen

const LayoutEffectTutrial = () => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    console.log(divRef.current.value);
  }, []);

  return (
    <div>
      <input ref={divRef} value="PEDRO"></input>
    </div>
  );
};

export default LayoutEffectTutrial;
