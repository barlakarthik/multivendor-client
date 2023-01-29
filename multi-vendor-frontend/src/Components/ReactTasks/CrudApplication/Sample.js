import React, { useEffect, useState } from "react";
const Sample = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    editedUsername: "",
    editedEmail: "",
    editedPassword: "",
    editedGender: "",
    currentid:""
  });
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    console.log(users);
  }, [users]);
  const InputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      name: user.username,
      email: user.email,
      password: user.password,
      gender: user.gender,
    };
    setUsers([...users, obj]);
    setUser({
      username:"",
      email:"",
      password:"",
      gender:""
    })
    console.log(users);
  };
  const onEditUser = (id, newUsername, newEmail, newPassword, newGender)=>{
    users.map((item)=>{
      if(item.id === id){
        item.username = newUsername;
        item.email = newEmail;
        item.password = newPassword;
        item.gender = newGender
      }
    })
  }
  const SubmitEdit = (e)=>{
    e.preventDefault();
    onEditUser(user.currentid, user.editedUsername, user.editedEmail, user.editedPassword, user.editedGender)
    setEdit(false)
    setUser({
      username:"",
      email:"",
      password:"",
      gender:""
    })
  }
  const Edit = (item) => {
    setEdit(true);
    setUser({
      currentid:item.id,
      editedUsername: item.username,
      editedEmail: item.email,
      editedPassword: item.password,
      editedGender: item.gender,
    });
  };
  const editHandler = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }
  const Delete = (id) => {
    setUsers([...users].filter((i) => i.id !== id));
  };
  return (
    <div>
      {edit === false?(<form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="username..."
          name="username"
          value={user.username}
          onChange={InputHandler}
        />
        <input
          type="email"
          placeholder="email..."
          name="email"
          value={user.email}
          onChange={InputHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={InputHandler}
        />
        <label>Gender</label>&nbsp;&nbsp;&nbsp;
        <label>Male:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        &nbsp;&nbsp;&nbsp;
        <label>Female:</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>):(<form onSubmit={SubmitEdit}>
        <input
          type="text"
          placeholder="editedUsername..."
          name="editedUsername"
          value={user.editedUsername}
          // onChange={editHandler}
          onChange={(e) => setUser({ ...user, editedUsername: e.target.value })}
        />
        <input
          type="email"
          placeholder="editedEmail..."
          name="editedEmail"
          value={user.editedEmail}
          onChange={editHandler}
        />
        <input
          type="password"
          placeholder="editedPassword..."
          name="editedPassword"
          value={user.editedPassword}
          onChange={editHandler}
        />
        <label>Gender</label>&nbsp;&nbsp;&nbsp;
        <label>Male:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setUser({ ...user, editedGender: e.target.value })}
        />
        &nbsp;&nbsp;&nbsp;
        <label>Female:</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setUser({ ...user, editedGender: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>)}
      
      <table>
        <thead>
          <tr>
            <th scope="col">s.no</th>
            <th scope="col">id</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">gender</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.gender}</td>
                <button>view</button>
                <button onClick={() => Edit(item)}>edit</button>
                <button onClick={() => Delete(item.id)}>delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Sample;
