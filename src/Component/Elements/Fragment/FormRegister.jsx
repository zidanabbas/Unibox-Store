import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const FormRegister = (props) => {
  return (
    <>
      <form action="">
        <div className="flex flex-col items-center">
          <FormInput
            label="Name"
            type="text"
            placeholder="Masukkan Nama Anda..."
            name="name"
          />
          <FormInput
            label="E-mail"
            type="email"
            placeholder="Masukkan E-mail Anda..."
            name="email"
          />
          <FormInput
            label="Username"
            name="username"
            type="text"
            placeholder="Masukkan Username Anda..."
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Masukkan Password Anda..."
          />
          <Button variant="bg-btnPrimary my-2">Register</Button>
          <div className="flex gap-x-2 font-Poppins">
            <p className="font-Poppins text-base text-paragraph">
              You have an account?
            </p>
            <Link to="/login" className="text-headline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
