import React, { useState } from 'react'

const Counter = () => {
         const [count,SetCount]  = useState(0)
         

         const incre = ()=>{
            SetCount(count => count+1)
         }
         const decre = () => {
            SetCount(count => count-1)
         }
         const res = ()=>{
            SetCount(0)
         }
       
         
  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={incre}> increment</button>
      <button onClick={decre}>decrement</button>
      <button onClick={res}>reset</button>
    </div>
  )
}

export default Counter
