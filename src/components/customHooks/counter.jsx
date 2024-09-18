import { useState } from "react"
import {  counterHook } from "./counterHook"
import { useNetworkStatus } from "./networkHook"
import usePreviousValue from "./previousHook"

export const CounterExample=()=>{
    const [val,setVal]=useState(0)
    const {isOnline}=useNetworkStatus()

    const previousValue=usePreviousValue(val)
    const clickHandler=(operation)=>{
        let value=counterHook(val,operation)
        setVal(value)
    }

    return(
        <>
            <h1 style={{textAlign:"center",marginTop:"5px"}}>Custom Counter Hook </h1>
           <div style={{marginLeft:"15px",marginTop:"5px"}}>
             <h1>Your network is {isOnline?'ON':'OFF'}</h1>
            <h1>Count: {val}</h1>
            <button onClick={()=>{clickHandler('INC')}}>Increment</button>
            <button onClick={()=>{clickHandler('RESET')}}>Reset</button>
            <button onClick={()=>{clickHandler('DEC')}}>Decrement</button>
           </div>
        </>
    )
}