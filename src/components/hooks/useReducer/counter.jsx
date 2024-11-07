import React, { useReducer } from 'react'






export const CustomCounter = () => {

  
    const initialState = {
        count:0
    }

  
    const ReducerFunction = (currentState,Action) =>{
        switch (Action.type)
        {
            case "INCREMENT_TYPE":
                
                return {...currentState,count:currentState.count+1}
        }
        
    }

   
    const [state,dispatch] = useReducer(ReducerFunction,initialState)
    
  

    
 const incrementHandler = ()=>{
   dispatch({type:"INCREMENT_TYPE",payload:1})
 }
 
  return (
    <div>
      <h2>{state.count} </h2>
      <button onClick={incrementHandler}>increment</button>
      <h1>shiva</h1>
    </div>
  )


}

