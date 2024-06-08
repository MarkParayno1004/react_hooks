import React from "react";

function UseLayoutEffect() {
  const inputRef = React.useRef(null);
  React.useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  React.useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);
  return (
    <div>
      <input ref={inputRef} value="Pedro" />
    </div>
  );
}

export default UseLayoutEffect;
