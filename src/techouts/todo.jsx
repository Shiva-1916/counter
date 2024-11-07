import React, { useState } from 'react'

function Todo() {
    const [data,setData] = useState([])
    const [details,setDetails] = useState({
        taskName:""
    })

    const [flag,setFalg] = useState(null)

    const addHandler = (e)=>{
            setDetails({
                taskName: e.target.value
            })
    }

    const submitHandler = (e) =>{
         e.preventDefault()
         setData([...data,details])

         setDetails({
            taskName:""
         })
    }

    const DeleteHandler = (id) =>{
     const result =   data.filter((_,ind) => id!= ind)
       setData(result)
    }

    const UpdateHandler = (id) =>{
        setFalg(id)
        const result =   data.filter((_,ind) => id == ind)[0]
        setDetails({
            taskName : result["taskName"]
        })

    }

    const updateSubmitHandler = (e) =>{
        e.preventDefault()
        const finalData =  data.map((each,index) =>{
             if(index == flag){
                 return {...each,taskName:details.taskName}
             }
             return each
         })
         setData(finalData)
         setFalg(null)
         setDetails({
           taskName:""
        })

    }
    
    

  return (
    
   <>
      <h1>TODO LIST</h1>
      <br />
      <input type="text"  placeholder='add item ...' width={100} name='taskName' value={details.taskName}  onChange={addHandler}/>
      <br /> <br />
      <button type='submit' style={{marginLeft:"5px"}} onClick={flag || flag == 0? updateSubmitHandler:submitHandler}>ADD</button>

      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
      <tbody>
                {
                    data.map((each,id) =>{
                        return <>
                        <tr>
                            <td>{each.taskName}</td>
                            <td><button onClick={()=>{DeleteHandler(id)}}>Delete</button></td>
                            <td><button onClick={()=> {UpdateHandler(id)}}>Update</button></td>

                        </tr>
                        </>
                    })
                }
        </tbody>
      </table>
      </>
  )
}

export default Todo
