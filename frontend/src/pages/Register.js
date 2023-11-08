import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="register" onSubmit={}>
      <h3>Signup</h3>

      <label>Name</label>
      <input type="email"></input>

      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>

      <label>Password</label>
      <input type="password"></input>
    </form>
    );
}

export default Register;
