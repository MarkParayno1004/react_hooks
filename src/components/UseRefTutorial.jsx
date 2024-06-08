import React from "react";

function UseRefTutorial() {
  const inputRef = React.useRef(null);

  return (
    <div>
      <h1>Mark</h1>
      <input type="text" placeholder="Example" ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
          inputRef.current.focus();
          inputRef.current.value = "";
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default UseRefTutorial;
