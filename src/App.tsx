
import { useCounterHook } from "./hooks/CounterHook"
import { useAppSelector } from "./hooks/dispatchhooks";


export function App() {
const counterValue = useAppSelector((state)=>state.demo)
  const {startDecrement,startIncrement,startIncrementBy,startResetCounter } = useCounterHook();
  return (
    <>
      <h1>Counter with reduxtoolkit</h1>
      <h3>{counterValue.counter}</h3>
      <div >
        <button onClick={ startIncrement} >
          Incrtemet
         </button>
        <button onClick={ startDecrement} >
          decrement
         </button>
        <button onClick={() => {
          startIncrementBy(10);
        }} >
          increment by 
         </button>
        <button onClick={startResetCounter} >
          resetCount
         </button>
      </div>
    
    </>
  )
}

