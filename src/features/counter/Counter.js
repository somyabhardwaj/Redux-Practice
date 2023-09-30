import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementByAdd, reset } from "./counterSlice";

import React, { useState } from 'react'

function Counter() {
    const dispatch =useDispatch();
    const count = useSelector((state)=>state.counter.count)

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addAmount = Number(incrementAmount) || 0;

    const resetAll =()=>{

      setIncrementAmount(0);
      dispatch(reset());

    }
  return (
    <>
    <p>{count}</p>
    <button onClick={()=> dispatch(incrementByAdd(addAmount))}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={resetAll}>Reset</button>
    <input type="text" value={incrementAmount} onChange={(e)=> setIncrementAmount(e.target.value)}/>
    </>
  )
}

export default Counter
