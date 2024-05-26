import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const countingUp = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log(counter);
  }

  const countingDown = () => {
    if (counter != 0) {
      counter = counter - 1;
      setCounter(counter)
    }

  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={countingUp}>Add Value :{counter}</button>
      <button onClick={countingDown}>Remove Value :{counter}</button>
    </>
  )
}

export default App
