import React from "react";

function UseReducerTutorial() {
  const func = () => {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return num.sort((a, b) => b - a);
  };

  const result = func();
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is a text</p>}
      <ul>
        {result.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerTutorial;
