import React from "react";
import "./App.css";
import UseEffectTutorial from "./components/UseEffectTutorial";
import UseReducerTutorial from "./components/UseReducerTutorial";
import UseRefTutorial from "./components/UseRefTutorial";
import UseStateTutorial from "./components/UseStateTutorial";
import UseLayoutEffect from "./components/UseLayoutEffect";

const tutorials = [
  { title: "useState", component: <UseStateTutorial /> },
  { title: "useReducer", component: <UseReducerTutorial /> },
  { title: "useEffect", component: <UseEffectTutorial /> },
  { title: "useRef", component: <UseRefTutorial /> },
  { title: "UseLayoutEffect", component: <UseLayoutEffect /> },
];

function App() {
  return (
    <React.Fragment>
      {tutorials.map((tutorial, index) => (
        <div
          key={index}
          style={{
            borderColor: "red",
            borderStyle: "solid",
            padding: 50,
            marginTop: index === 0 ? 0 : 10,
          }}
        >
          <h1>{tutorial.title}</h1>
          {tutorial.component}
        </div>
      ))}
    </React.Fragment>
  );
}

export default App;
