import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { login } from "../../../Services/auth.services";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/profile";
      } else {
        // console.log(res);
        setLoginFailed(res.response.data);
        // console.log(res.response.data);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        {loginFailed && (
          <p className="text-red-500 text-center font-Poppins font-thin">
            {loginFailed}
          </p>
        )}
        <div className="flex flex-col items-center">
          <FormInput
            label="Username"
            type="text"
            placeholder="Masukkan Username Anda"
            name="username"
            // ref={usernameRef}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Masukkan Password Anda"
          />
          <Button classname="bg-btnPrimary my-2" type="submit">
            Login
          </Button>
          <div className="flex gap-x-2 font-Poppins">
            <p className="font-Poppins text-base text-paragraph">
              Dont have an account?
            </p>
            <Link to="/register" className="text-headline">
              Register
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
