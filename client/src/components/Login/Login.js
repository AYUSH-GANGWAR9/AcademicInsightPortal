import React, { useState } from 'react'

function Login() {

  const [user, setUser] = useState('Student');
  
  const changeUser = () =>{
    // console.log("hello");
    if(user === 'Student') setUser('Admin');
    else setUser('Student');
  }

  const [userData, setUserData] = useState({email: "", password: ""});
  
  const onValueChange = (e) =>{
    setUserData({...userData, [e.target.name] : e.target.value});
  }
  

  return (
    <>
      <div>
        <h1>{user} Login</h1>
        <p >Email</p>
        <input type="email" name='email' onChange={(e) => onValueChange(e)}/>
        <p>Password</p>
        <input type="password" name='password' onChange={(e) => onValueChange(e)}/>

        <button>Login</button>

        <button onClick={() => changeUser()}>{user === 'Student' ? "Login as a Admin": "Login as a Student"}</button>
      </div>
    </>
  )
}

export default Login