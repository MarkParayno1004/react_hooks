import * as React from "react";

const UseStateTutorial = () => {
  const [useIncrement, setUseIncrement] = React.useState(0);
  const [getValue, setGetValue] = React.useState("");
  const [newValue, setNewValue] = React.useState("No Value");
  return (
    <div>
      <h3>Current Increment Value: {useIncrement}</h3>
      <button onClick={() => setUseIncrement(useIncrement + 1)}>
        Increment
      </button>

      <h3>Change Input Value:</h3>
      <h3>Value: {newValue}</h3>
      <input
        placeholder="Input Value to Change"
        value={getValue}
        onChange={(event) => {
          setGetValue(event.target.value);
        }}
      />
      <button onClick={() => setNewValue(getValue)}>Set Permanent Value</button>
    </div>
  );
};

export default UseStateTutorial;
