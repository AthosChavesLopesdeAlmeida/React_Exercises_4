import { useCounterStore } from './counterStore'

const CounterDisplay = () => {
  const counter = useCounterStore((state) => state.counter)

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  )
}

export default CounterDisplay