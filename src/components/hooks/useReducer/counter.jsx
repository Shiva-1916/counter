import React, { createContext, useReducer } from 'react'

export const CustomCounter = () => {
   
    const ReducerFunction = (currentState,Action) =>{
        switch (Action.type)
        {
            case "INCREMENT_TYPE":
                return(dispatch(...currentState,currentState.count +1))
        }
        
}
    const initialState = {
        count:0
    }

const IncrementHandler = ()=>{
    dispatch(
        {
            type: "IncrementHandler"
        }
    )

    
 const [state,dispatch] = useReducer(ReducerFunction,initialState)
 
  return (
    <div>
      <h2>{state} </h2>
      <button onClick={IncrementHandler}>increment</button>
    </div>
  )
}
}
export default CustomCounter
