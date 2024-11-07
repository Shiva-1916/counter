import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BasicExample from './card'
import BasicExample1 from './navbar'
import ColorSchemesExample from './navbar'



function Eswiggy() {

  const [data,setData] = useState([])
  useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data1 = await axios.get('https://dummyjson.com/recipes')
        setData(data1.data.recipes)
    }
  return (
    <div>
    <ColorSchemesExample/>
    <h1 style={{ textAlign: "center", color:"orange"}}>Welcome to e-swiggy</h1>
    <div style={{display:"flex",flexWrap:"wrap", padding:"20px", gap:"20px" , textAlign:"center" , justifyContent:"center"}}>
    {data.map((val) => (
      <div key={val.id}>
        <div>
            <BasicExample src={val.image} name={val.name} />
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}

export default Eswiggy
