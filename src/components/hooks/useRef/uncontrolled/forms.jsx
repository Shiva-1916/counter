import axios from "axios";
import { useRef, useState } from "react";
import Table from 'react-bootstrap/Table';
import CustomImage from "../../../images/customImage";
const CustomForm = () => {
    const username=useRef('')
    const pass=useRef('')

    const [formError,setFormError]=useState({})
    const [allItems, setAllItems]=useState([])
    
    const onSubmit=(e)=>{
        e.preventDefault()
        const usernameEntered=username.current.value
        const passwordEntered=pass.current.value

       const FormErrors=validation(usernameEntered,passwordEntered)

        if(Object.keys(FormErrors).length>0){
            alert('form  error')
            setFormError(FormErrors)
        }
        else{
           loginApi(usernameEntered,passwordEntered)
        }
        
    }

    const loginApi=async (username,password)=>{
        try{
            let {data}=await axios.post('https://dummyjson.com/auth/login', {
    
                "username": username,
                "password": password,
                "expiresInMins": 30
              })

              //

              setEachItem(data)
              setAllItems([...allItems,data])
        }
        catch(err){
            console.error(err)
        }
    }


    const validation=(username,password)=>{
        const FormErrors={}
        if(!username){
            FormErrors['username Error']='please enter UserName'
        }
        else if(username.length<6){
            FormErrors['username Error']='Enter username greater than 7'
        }

        if(!password){
            FormErrors['password Error']='please enter password'
        }else if(password.length<8){
            FormErrors['password Error']='enter minimum length'
        }

        return FormErrors
    }

    const deleteUser=(userId)=>{
        const updatedUsers= allItems.filter(eachUser=>eachUser.id!==userId)

        setAllItems(updatedUsers)
    }
  return (
    <>
        <h1 style={{marginLeft:"10px"}}>Enter User details :-</h1>
        <div style={{margin:"10px 0px 0px 10px"}}>
        <form onSubmit={onSubmit} style={{width:'50%',padding:'2%', border:'2px solid gray',marginBottom:"10px"}}>
        <div className="form-group">
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={username}
          />
          <span>{formError?.['username Error']}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password : </label>
          <input
            type="password"
            className="form-control"
            id="username"
            placeholder="Password"
            ref={pass}
          />
          <span>{formError?.['pass Error']}</span>
        </div>

        <button type="submit" className="btn btn-primary" style={{margin: "5px 0px 5px 0px"}}>
          Submit
        </button>
      </form>
        </div>
    </>
  );
};

export default CustomForm