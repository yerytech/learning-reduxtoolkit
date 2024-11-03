
import { decrement, increment, incrementBy,resetCounter } from "../store/slice/slice"
import { useAppDispatch } from "./dispatchhooks";

export const useCounterHook = () => {
    const dispatch = useAppDispatch()
    const startIncrement = () => {
        dispatch(increment());
    }

    const startDecrement = () => {
       dispatch( decrement());
   }

    const startIncrementBy = (num:number) => {
        dispatch(incrementBy(num))
    }
    const startResetCounter = () => {
        dispatch(resetCounter());
    }


    return {



        // methods
        startIncrement,
        startDecrement,
        startIncrementBy,
        startResetCounter
  }
    
  
}