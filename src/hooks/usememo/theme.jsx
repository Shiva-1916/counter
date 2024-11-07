import React, { useMemo, useState } from 'react'

function UseMemoExample() {
    const [count,setCount] = useState(0)
    const [theme,setTheme] = useState(true)
 

    const ThemeHandler = ()=>{
        setTheme(!theme)
    }
    const CountHandler = ()=>{
        setCount(count+1)
    }

  return (
    <div style={{backgroundColor:theme?"black":"white", height:"500px"}}>
       <h1>count: {count}</h1>
       <button onClick={ThemeHandler}>Theme changer</button>
       <button onClick={CountHandler}>Change count</button>
    </div>
  )
}

export default UseMemoExample
