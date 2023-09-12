import { useState, useEffect, useCallback, useMemo } from 'react'

function App() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/numbers.json")
    .then((resp) => resp.json())
    .then((data) => (setNumbers(data)))
  },[])

  const addNumber = useCallback(() => {
    console.log("adding a number")
    setNumbers((numbers) => [...numbers,  numbers.length + 1] )
  }, [])

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  const sum = useMemo(() => {
    console.log('useMemo hook is called');
    return  numbers.reduce((a, v) => a + v, 0)
  },[numbers])
            

  return (
    <div>
      <h1>Hooks</h1>
      <div className='numbersArray'>
        <h3>Números: {JSON.stringify(numbers)}</h3>
        <button onClick={addNumber}>Add a number</button>
      </div>
      <div className="countNumber">
        <button onClick={incrementCount}>+</button>
        <h3> {count}</h3>
        <button onClick={decrementCount}>-</button>
      </div>
      <p>Sum os numbers: {sum}</p>
    </div>
  )
}

export default App
