import React from "react";
import "./App.css";
import UseEffectTutorial from "./components/UseEffectTutorial";
import UseReducerTutorial from "./components/UseReducerTutorial";
import UseRefTutorial from "./components/UseRefTutorial";
import UseStateTutorial from "./components/UseStateTutorial";
import UseLayoutEffect from "./components/UseLayoutEffect";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          borderColor: "red",
          borderStyle: "solid",
          padding: 50,
        }}
      >
        <h1>useState</h1>
        <UseStateTutorial />
      </div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "solid",
          padding: 50,
          marginTop: 10,
        }}
      >
        <h1>useReducer</h1>
        <UseReducerTutorial />
      </div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "solid",
          padding: 50,
          marginTop: 10,
        }}
      >
        <h1>useEffect</h1>
        <UseEffectTutorial />
      </div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "solid",
          padding: 50,
          marginTop: 10,
        }}
      >
        <h1>useRef</h1>
        <UseRefTutorial />
      </div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "solid",
          padding: 50,
          marginTop: 10,
        }}
      >
        <h1>UseLayoutEffect</h1>
        <UseLayoutEffect />
      </div>
    </React.Fragment>
  );
}

export default App;
