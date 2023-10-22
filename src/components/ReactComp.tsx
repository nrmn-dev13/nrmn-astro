import React, { useState } from "react";
const ReactComp = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
    </div>
  )
}

export default ReactComp;