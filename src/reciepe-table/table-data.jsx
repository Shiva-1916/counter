import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './table.module.css'
import CustomList from '../components/lists/customlist'

const TableData = () => {
   const [data,SetData] = useState([])
   const [searchData,SetSearchData] = useState("")
   const [filteredData,SetFilteredData] = useState({})
    
   useEffect(()=>{
        fetchData()
    },[searchData])

   const fetchData = async ()=> {
    const response = await axios.get(`https://dummyjson.com/recipes/search?q=${searchData}`)
    if(response.status === 200){
       SetData(response.data.recipes)
   }
   }   
   const SearchData = (e)=>{
       SetSearchData(e.target.value)
      
   }
   
   
  return (
    <>
    <h3 style={{color:"green", textAlign:"center", marginTop:"5px" }}>Reciepe Data</h3>
   <h5> search  :  <input type="text" value={searchData} onChange={SearchData}/></h5>
    <table>
            <thead>
            <tr >
              <th>id</th>
              <th>title</th>
              <th>image</th>
              <th>instructions</th>
              <th>ingredients</th>
            </tr>
            </thead>
            <tbody>
    {
      data.map((val)=>{
        return(
          
            <tr key={val.id}>
              <td>
                {val.id}
              </td>
              <td>
                {val.name}
              </td>
              <td>
                <img src={val.image} alt="" width={200} height={200}/>
              </td>
              <td>
                <CustomList listItem={val.instructions}/>
              </td>
              <td>
                <CustomList listItem={val.ingredients}/>
              </td>
            </tr>
        )
      })
    }
     </tbody>
     </table>
    
    </>
  )
}

export default TableData
