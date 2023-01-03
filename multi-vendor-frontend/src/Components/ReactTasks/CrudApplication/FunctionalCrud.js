import React, { useEffect, useState } from "react";

const FunctionalCrud = () => {
  const [data, setData] = useState({
    id:"",
    name: "",
    email: "",
    password: "",
    editedName:"",
    editedEmail:"",
    editedPassword:"",
    currentid:""
  });
  const [details, setDetails] = useState([]);
  const [editing, setEditing] = useState(false);
  const [record, setRecord] = useState(false)
  const [user, setUser] = useState([])
  useEffect(() => {}, [details]);
  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    const obj = {
      name: data.name,
      email: data.email,
      password: data.password,
      id: Date.now(),
    };
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      setDetails([...details, obj]);
      setData({
        name: "",
        email: "",
        password: "",
      });
    }
  };
const onEditTodo = (id, newName, newEmail, newPassword)=>{
    details.map((todo)=>{
      if(todo.id === id){
       todo.name = newName;
        todo.email = newEmail;
        todo.password = newPassword
      }
    })
}
const onSubmitTodo = (e)=>{
   e.preventDefault();
   onEditTodo(data.currentid, data.editedName, data.editedEmail, data.editedPassword)
   setEditing(false)
   setData({
    name: "",
    email: "",
    password: "",
  });
}
  const editHandler = (user)=>{
    setEditing(true)
    setData({
      currentid:user.id,
      editedName: user.name,
      editedEmail: user.email,
      editedPassword: user.password,
     })
  }
  const onEditInputChange = (e)=>{
    const {name, value} = e.target
    setData({ ...data, [name]: value });
  }
  const deleteHandler = (user)=>{
     setDetails(
      [...details].filter((i)=>i.id !== user)
     )
  }
  const viewRecord = (user)=>{
    setRecord(true)
    setUser(user)
    setTimeout(()=>{
      setRecord(false)
    },5000)
  }
  return (
    <div>
      {editing === false?(
              <form onSubmit={Submit}>
              <input
                type="text"
                placeholder="username"
                name="name"
                value={data.name}
                onChange={ChangeHandler}
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                value={data.email}
                onChange={ChangeHandler}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={ChangeHandler}
              />
              <button>Submit</button>
            </form>

      ):(
        <form onSubmit={onSubmitTodo}>
        <input
          type="text"
          placeholder="editedName"
          name="editedName"
          value={data.editedName}
          onChange={onEditInputChange}
        />
        <input
          type="email"
          placeholder="editedEmail"
          name="editedEmail"
          value={data.editedEmail}
          onChange={onEditInputChange}
        />
        <input
          type="password"
          placeholder="editedPassword"
          name="editedPassword"
          value={data.editedPassword}
          onChange={onEditInputChange}
        />
        <button>Update</button>
      </form>
      )}

      {record === false?<div className="container">
        <table className="table">
          <thead className="bg-secondary text-white">
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((user, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-outline-info" onClick={()=>viewRecord(user)}>View</button>
                  <button className="btn btn-outline-secondary" onClick={()=>editHandler(user)}>Edit</button>
                  <button className="btn btn-outline-danger" onClick={()=>deleteHandler(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>   
      <h3>{user.email}</h3>
      <h3>{user.password}</h3>
      </div>
      }
    </div>
  );
};

export default FunctionalCrud;
