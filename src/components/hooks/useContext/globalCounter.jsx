import { useContext } from "react"
import { UserDetails } from "./stack"

export const GlobalCounter=()=>{
    const {counter}=useContext(UserDetails)
    
    return(
        <>
         <h1>Welcome to Global screen</h1>
            <h3>Counter : {counter}</h3>
        </>
    ) 
}