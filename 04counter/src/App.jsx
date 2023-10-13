import { useState } from "react";
import "./App.css";

function App() {
  //! responsible for managing the change in state
  let [counter, setCounter] = useState(2);

  // let counter = 15;

  const addValue = () => {
    // console.log(counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter value | {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
