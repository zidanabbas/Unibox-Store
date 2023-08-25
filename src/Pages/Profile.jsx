import React from "react";
import { useLogin } from "../Hooks/useLogin";
const Profile = () => {
  const username = useLogin();
  return (
    <div>
      <h1>profile : {username}</h1>
    </div>
  );
};

export default Profile;
