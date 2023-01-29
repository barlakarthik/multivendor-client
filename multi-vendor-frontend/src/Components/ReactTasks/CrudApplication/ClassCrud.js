import React, { Component } from 'react'

class ClassCrud extends Component {
   constructor(){
    super();
    this.state={
        username:"",
        email:"",
        password:"",
        gender:"",
        user:[],
        editing:false,
        currentusername:"",
    currentemail:"",
    currentpassword:"",
    currentgender:"",
    currentid:""
    }
   }
   Submit = (e)=>{
    e.preventDefault()
    const obj={
        id:Date.now(),
        username:this.state.username,
        email:this.state.email,
        password:this.state.password,
        gender:this.state.gender
    }
   this.setState({user:this.state.user.concat(obj)},()=>{
    console.log(this.state.user, 'user')
   })
  this.setState({
    username:"",
    email:"",
    password:"",
    gender:"",
  })
}
Editing = (id, newUsername, newEmail, newPassword, newGender)=>{
  this.state.user.map((item)=>{
    if(item.id === id){
      item.username = newUsername;
      item.email = newEmail;
      item.password = newPassword;
      item.gender = newGender
    }
  })
}
SubmitEdit = (e)=>{
e.preventDefault();
this.Editing(this.state.currentid,this.state.currentusername, this.state.currentemail, this.state.currentpassword, this.state.currentgender)
this.setState({editing:!this.state.editing})
this.setState({
  username:"",
  email:"",
  password:"",
  gender:"",
})
}
Edit = (item)=>{
  this.setState({editing:true})
  this.setState({
    currentid:item.id,
    currentusername:item.username,
    currentemail:item.email,
    currentpassword:item.password,
    currentgender:item.gender
  })
}
EditInput = (e)=>{
  const {name, value} = e.target
  this.setState({...this.state.user, [name]:value})
}
Delete = (id)=>{
 this.setState({user:[...this.state.user].filter(i=> i.id !== id)})
}
   render() {
      const {username, email, password} = this.state;
    return (
      <div>
        {this.state.editing === false?(
        <form onSubmit={this.Submit}>
        <input type='text' placeholder = 'username...' value={username} name = 'username' onChange={(e)=>this.setState({username:e.target.value})}/>
        <input type='email' placeholder = 'email...' value={email} onChange={(e)=>this.setState({email:e.target.value})}/>
        <input type='password' placeholder = 'password...' value={password} onChange={(e)=>this.setState({password:e.target.value})}/>
        <label>Gender</label>&nbsp;&nbsp;&nbsp;
        Male:<input type='radio' name = 'gender' value='male' onChange={(e)=>this.setState({...this.state,gender:e.target.value})}/>&nbsp;&nbsp;
        Female:<input type='radio' name = 'gender' value='female' onChange={(e)=>this.setState({...this.state,gender:e.target.value})}/>&nbsp;&nbsp;
        <button type='submit'>Submit</button>
        </form>
        ):(
<form onSubmit={this.SubmitEdit}>
        <input type='text' placeholder = 'username...' value={this.state.currentusername} name = 'username' onChange={(e)=>this.setState({currentusername:e.target.value})}/>
        <input type='email' placeholder = 'email...' value={this.state.currentemail} onChange={(e)=>this.setState({currentemail:e.target.value})}/>
        <input type='password' placeholder = 'password...' value={this.state.currentpassword} onChange={(e)=>this.setState({currentpassword:e.target.value})}/>
        <label>Gender</label>&nbsp;&nbsp;&nbsp;
        Male:<input type='radio' name = 'gender' value='male' onChange={(e)=>this.setState({...this.state,currentgender:e.target.value})}/>&nbsp;&nbsp;
        Female:<input type='radio' name = 'gender' value='female' onChange={(e)=>this.setState({...this.state,currentgender:e.target.value})}/>&nbsp;&nbsp;
        <button type='submit'>Update</button>
        </form>
        )}
        <table>
          <thead>
            <tr>
              <th scope='col'>S.no</th>
              <th scope='col'>id</th>
              <th scope='col'>username</th>
              <th scope='col'>email</th>
              <th scope='col'>password</th>
              <th scope='col'>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((item, index)=>{
              return(
                <tr>
                <td scope="row">{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.gender}</td>
                  <td>
                    <button>view</button>
                    <button onClick={()=>this.Edit(item)}>edit</button>
                    <button onClick={()=>this.Delete(item.id)}>delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default ClassCrud;