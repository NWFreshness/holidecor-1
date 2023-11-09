import React, { useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from refreshing on submit
    const userData = {
      email,
      password,
    };
    if (userData) {
      await login(userData);
      toast.success("Logged in!");
      navigate("/");
    } else {
      toast.error(error);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

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

      <button disabled={isLoading}>Login</button>
      {error && toast.error(error)}
    </form>
  );
}

export default Login;
