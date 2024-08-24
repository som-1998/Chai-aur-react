import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function CountUp(count) {
    if (count < 5) {
      setCount(count + 1);
    }
    
  }

  function CountDown(count) {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={CountUp}>Add Count</button>
      <br />
      <button onClick={CountDown}>Count Down</button>
      <p>Count is {count}</p>
    </>
  )
}

export default App
