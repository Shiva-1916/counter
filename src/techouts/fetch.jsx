import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Fetch() {

    const [data,setData] = useState([])

    useEffect(  ()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const res =  await axios.get('https://jsonplaceholder.typicode.com/posts')
         setData(res.data)
    }
    
    

  return (
    <div>
      {
        data.map((each)=>{
          return (
          <>
            <h1>{each.userId}</h1>
            <h1>{each.title}</h1>
          </>
          )

        })
      }
    </div>
  )
}

export default Fetch
