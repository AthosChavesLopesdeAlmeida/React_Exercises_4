import { useCounterStore } from './counterStore'

const CounterControls = () => {
  const addCounter = useCounterStore((state) => state.addCounter)
  const decreaseCounter = useCounterStore((state) => state.decreaseCounter)
  const resetCounter = useCounterStore((state) => state.resetCounter) 

  return (
    <div>
      <button onClick={addCounter}>Add</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default CounterControls