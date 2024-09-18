import { useState } from "react";
import { countryStateData } from "./countries.js";
import { CustomValidator } from "./validator.js";

export const CustomForm = () => {
    let intialData={
      username:'',
      mobileNumber:'',
      mobileModel:'iphone 13',
      issue:'',
      state:'',
      country:''
    }


  const [flag,setFlag]=useState(false)
  const [formData,setFormData]=useState(intialData)
  const [formError,setFormError]=useState({
    nameErr:'',
    mobileErr:'',

  })
  const [country,SetCountry]=useState('India')
  const [state,setStates]=useState(countryStateData['India'])

  const onChangeHandler=(event)=>{
    const {name,value}=event.target
    
    setFormData({...formData,[name]:value})
    
    const errorObj= CustomValidator(formData)
    if(Object.keys(errorObj).length>0){
      const {usernameErr,mobileNumberErr}=errorObj
      let obj={
        nameErr:usernameErr,
        mobileErr:mobileNumberErr
      }
      setFormError(obj)
    }

    if(name==="country" ){
      SetCountry(value)
      setStates(countryStateData[value])
      setFormData({
        ...formData,
        country: value,
        state: countryStateData[value][0]
      })
    }
  }

    const submitHandler=(event)=>{
      event.preventDefault()
      const {username,mobileNumber}=formData
      if(username.length ==0 || mobileNumber.length==0)
          alert('Please fill the form ') 

      setFlag(true)
    }   


 
    return (
    <>
     { !flag? (
         <form onSubmit={submitHandler} style={{width:'50%', marginLeft:'25%', marginTop:'10px', padding:'10px', border:'2px solid gray'}}>
         <div className="form-group">
           <label htmlFor="username">Username</label>
           <input
             type="text"
             className="form-control"
             name="username"
             id="username"
             placeholder="name"
             value={formData.username}
             onChange={onChangeHandler}
           />
            {formError.nameErr &&  <span style={{color:'red'}}>{formError.nameErr}</span>}
         </div>
         <div className="form-group">
           <label htmlFor="mobile">Mobile Number</label>
           <input
             type="text"
             className="form-control"
             id="username"
             placeholder="Mobile number"
             name="mobileNumber"
             value={formData.mobileNumber}
             onChange={onChangeHandler}
           />
           {formError.mobileErr&&  <span style={{color:'red'}}>{formError.mobileErr}</span>}
         </div>
 
         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Model</label>
           <select onChange={onChangeHandler} className="form-control" id="exampleFormControlSelect1" name="mobileModel" value={formData.mobileModel}>
             <option>iphone 13</option>
             <option>iphone 12 pro</option>
             <option>iphone 15</option>
             <option>iphone X</option>
             
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Country</label>
           <select  onChange={onChangeHandler} className="form-control" name="country" value={formData.country}>
             {
              
               Object.keys(countryStateData).map(eachCountry=>{
                
                return <option value={eachCountry}>{eachCountry}</option>
               })
             }
             
            
             
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select State</label>
           <select onChange={onChangeHandler} className="form-control"  name="state" value={formData.state}>
             {
              state.map(currentState=>{
                return( <option value={currentState}>{currentState}</option>)
              })
             }
           </select>
         </div>
        
         <div className="form-group">
           <label htmlFor="exampleFormControlTextarea1">Your issue</label>
           <textarea
             className="form-control"
             id="exampleFormControlTextarea1"
             rows={3}
             name="issue"
             value={formData.issue}
             onChange={onChangeHandler}
             style={{marginTop:"5px"}}
           />
         </div>
         <button  className="btn btn-primary" style={{margin:"10px"}}>Submit</button>
       </form>
     ): (
        <div className="alert alert-success">
            Form submitted successfully!
        </div>
    )}
    </>
  );
};