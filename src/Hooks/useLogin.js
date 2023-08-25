import { useEffect, useState } from "react";
import { getUsername } from "../Services/auth.services";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
