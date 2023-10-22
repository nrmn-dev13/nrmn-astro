import React, { useState } from "react";
const ReactComp = (props) => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
      <p>Name {props.name}</p>
    </div>
  )
}

export default ReactComp;