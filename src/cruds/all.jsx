import React, { useState } from 'react'
import "./all.module.css"

function All() {

    const [data,setData] = useState([])
   const [details,setDetails] = useState({
        name:"",
        email:""
    })
   const [update,setUpdate]= useState(null)
   
   const DetailsHandler = (e) =>{
        const {name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        setData([...data,details])
    }
    const DeleteHandler = (id) =>{
       const result = data.filter((_,index) => id !=  index)
       setData(result)
    }
    const UpdateHandler = (id) =>{
        setUpdate(id)
        const update = data.filter((_,index) => id == index)[0]
        setDetails({name:update["name"],email:update["email"]})
    }
    const updateSubmitHandler = (e)=>{
        e.preventDefault()
       const finalData =  data.map((each,index) =>{
            if(index == update){
                return {...each,name:details.name,email:details.email}
            }
            return each
        })

        setData(finalData)
        setUpdate(null)
        setDetails({
            name:"",
            email:"",
        })

    }
    // const updateSubmitHandler = (e) => {
    //     e.preventDefault();
    //     const finalData = data.map((item, index) => {
    //         if (index === update) {
    //             return { ...item, name: details.name, email: details.email };  // spread the item, not data
    //         }
    //         return item;  // return original item if index doesn't match
    //     });
    
    //     setData(finalData);
    //     setUpdate(null);
    //     setDetails({
    //         name: "",
    //         email: "",
    //     });
    // };
    
    
  return (
    <div style={{margin:"10px 0px 0px 10px"}}>
      <form action="">
        <label htmlFor="name">Name: </label> 
        <input type="text" name="name" value={details.name} id='name' placeholder='name' onChange={DetailsHandler}/> 
        <label htmlFor="email">Email: </label> 
        <input type="text" name='email' id='email' value={details.email} placeholder='email' onChange={DetailsHandler}/> 
        <label htmlFor="">submit</label>
        <button type="submit" onClick={update || update==0?updateSubmitHandler:submitHandler}>{update || update==0?"update":"submit"}</button>
      </form>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
      <tbody>
                {
                    data.map((each,id) =>{
                        return <>
                        <tr>
                            <td>{each.name}</td>
                            <td>{each.email}</td>
                            <td><button onClick={()=>{DeleteHandler(id)}}>Delete</button></td>
                            <td><button onClick={()=> {UpdateHandler(id)}}>Update</button></td>
                        </tr>
                        </>
                    })
                }
        </tbody>
      </table>
    </div>
    
  )
}

export default All
