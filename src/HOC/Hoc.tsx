import React, { useState } from "react";

function Hoc(Component: any) {
  // If you give useState here - const [val, setVal] = useState("");
  // the HOC will not perform as per our requirements, will get error
  return function () {
    // This is the best position to define state
    const [val, setVal] = useState("");
    return <Component val={val} setVal={setVal} />;
  };
}

export default Hoc;
