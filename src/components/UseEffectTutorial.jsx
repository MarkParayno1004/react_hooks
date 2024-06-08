import React from "react";
import axios from "axios";

function UseEffectTutorial() {
  const [data, setData] = React.useState("");
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setData(response.data.fact);
    });
  }, [count]);
  return (
    <div>
      <h3>{data}</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
    </div>
  );
}

export default UseEffectTutorial;
