import React, { useState } from "react";

function Login({ setIsLoggedIn }) {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {

    if(username==="admin" && password==="admin"){
      setIsLoggedIn(true);
    }else{
      alert("Invalid Login");
    }
  };

  return (

    <div className="login-container">

      <h2>Pharmacy Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

    </div>
  );
}

export default Login;