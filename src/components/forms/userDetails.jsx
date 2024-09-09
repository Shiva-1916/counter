import React, { useState } from 'react'

const UserDetails = () => {
  const [userName,setUserName] = useState("")
  const [mobileNumber,setMobileNumber] = useState("")
  const [problem,setProblem] = useState("")

const [Userval,setUserVal] = useState("")

  const userHandler = (event)=>{
       let userData = event.target.value
        setUserName(userData)
      const userdata =  userValidator(userData)
      setUserVal(userdata)

  }
  const mobileHandler = (event) =>{
    let userMobile = event.target.value
    setMobileNumber(mobileNumber)
  }
  const problemHandler = (event)=>{
   let  userProblem = event.target.value
    setProblem(userProblem)
  }

  const userValidator = (userEntered)=>{
       let UserError = ""
          if(!userEntered){
              UserError = "Please enter valid UserName"
          }
          else if(userEntered.length > 20){
            UserError = "Please enter characters less than 20"
          }

          return UserError
  }
  return (
    <form action="">
        <label htmlFor="user">Enter UserName: </label>
        <input type="text" id='user' value={userName} onChange={userHandler}/> <br /> 
        <span style={{color:"red"}}>{Userval}</span> <br /> <br />
       
        <label htmlFor="mob">Enter Mobile Number:</label>
        <input type="mobile"  id='mob' value={mobileNumber} onChange={mobileHandler}/>  <br /><br />
        <label htmlFor="prob">Enter the problem: </label>
        <input type="text" id='prob' value={problem} onChange={problemHandler}/>  
    </form>
  )
}

export default UserDetails
