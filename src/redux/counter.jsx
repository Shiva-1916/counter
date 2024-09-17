import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment ,  decrement} from './reducer';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign:"center"}}>  
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter