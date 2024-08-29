import React, { useRef } from 'react'

const CustomForm = () => {
  return (
    <div>
         <h1>Form</h1>
      <form >
       <label htmlFor="user" >username  </label>
       <input type="text" id='user' /> <br /> <br />
       <label htmlFor="pass">Password  </label> 
       <input type="text" id='pass' /> <br /> <br />
      </form>
    </div>
  )
}

export default CustomForm
