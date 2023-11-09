import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    const response = await axios.post("/api/users/", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(response.error);
    }
    // return response.data;
  };
  return { register, isLoading, error };
};
