import { useEffect } from "react";

export default function Two({ val, setVal }: any) {
  return (
    <div>
      <h1>Component Two</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
}
