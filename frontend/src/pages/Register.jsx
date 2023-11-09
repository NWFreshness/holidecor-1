import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { register, isLoading, error } = useRegister();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from refreshing on submit
    const userData = {
      name,
      email,
      password,
      confirmPassword,
    };
    if (password === confirmPassword) {
      await register(userData);
      toast.success(`Registered new user - ${userData.name}`);
      navigate("/");
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Name:</label>
      <input type="name" onChange={onChange} value={name} name="name"></input>

      <label>Email:</label>
      <input
        type="email"
        onChange={onChange}
        value={email}
        name="email"
      ></input>

      <label>Password:</label>
      <input
        type="password"
        onChange={onChange}
        value={password}
        name="password"
      ></input>

      <label>Confirm Password:</label>
      <input
        type="password"
        onChange={onChange}
        value={confirmPassword}
        name="confirmPassword"
      ></input>

      <button disabled={isLoading}>Register</button>
      {error && toast.error(error)}
    </form>
  );
}

export default Register;
