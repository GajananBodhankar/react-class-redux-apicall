import React from "react";
import One from "./One";
import Hoc from "./Hoc";
import Two from "./Two";

function Wrapper() {
  let First = Hoc(One);
  let Second = Hoc(Two);
  return (
    <div>
      <First />
      <Second />
    </div>
  );
}

export default Wrapper;
