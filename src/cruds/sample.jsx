import React, { useState } from "react";

function Sample() {
  const [data, setData] = useState([]);
  const [flag, setfalg] = useState(false);
  const [open, setOpen] = useState(null);
  const [userDetails, setUseDetails] = useState({
    name: "",
    email: "",
  });
  const AddHandler = () => {
    setfalg(!flag);
  };
  const DynamicHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUseDetails({ ...userDetails, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    setData([...data, userDetails]);
    setUseDetails({
      name: "",
      email: "",
    });
  };

  const DeleteHandler = (index) => {
    const result = data.filter((_, id) => id != index);
    setData(result)
  };
  const UpdateHandler = (index) => {
    setOpen(index);
    const Update = data.filter((_, id) => id == index)[0]
    setUseDetails({
      name: Update.name,
      email: Update.email,
    });
  };
  const submitUpdateHandler = (e) => {
    e.preventDefault()
    const updatevalue=data.map((_,i)=>{
      if(i==open){
        return {...data,name:userDetails.name,email:userDetails.email}
      }
      return updatevalue
    })

    setData(updatevalue)

    setOpen(null)

    setUseDetails({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <button onClick={AddHandler}>Add</button>
      {flag ? (
        <>
          <form action="">
            <input
              type="text"
              placeholder="name"
              value={userDetails.name}
              name="name"
              onChange={DynamicHandler}
            />
            <input
              type="text"
              placeholder="email"
              value={userDetails.email}
              name="email"
              onChange={DynamicHandler}
            />
           <button onClick={open || open == 0 ? submitUpdateHandler : SubmitHandler}>{open || open == 0?"updatesubmit":"submit"}
           </button>
          </form>
        </>
      ) : (
        "empty"
      )}
      <div>
        {data.map((value, index) => {
          return (
            <>
              <h1>{value.name}</h1>
              <h1>{value.email}</h1>
              <button
                onClick={() => {
                  DeleteHandler(index);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  UpdateHandler(index);
                }}
              >
                update
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Sample;
