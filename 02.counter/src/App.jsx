import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCoutner] = useState(5);

  const addValue = () => {
    setCoutner(counter+1);
  }

  const subValue = () => {

    if(counter > 0) return setCoutner(counter-1);
    
  }

  return (
    <>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
      <h2>My Counter: {counter}  </h2>
      <button onClick={addValue}>Plus</button>
      <span> </span>
      <button onClick={subValue}>Minus</button>
    </>
  )
}

export default App
