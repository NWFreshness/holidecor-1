import axios from "axios";

// auth.js is not used in our app. Decided to use hooks instead. See useLogin, useLogout, useRegister in hooks folder

const API_URL = "/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => localStorage.removeItem("user");

export default { register, login, logout };
