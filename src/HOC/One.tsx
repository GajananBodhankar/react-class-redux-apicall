export default function One({ val, setVal }: any) {
  return (
    <div>
      <h1>Component One</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button onClick={() => console.log(val)}>click</button>
    </div>
  );
}
