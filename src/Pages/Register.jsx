import React from "react";
import Header from "../Component/Headers/Header";
import AuthLayouts from "../Layouts/AuthLayouts";
import FormRegister from "../Component/Elements/Fragment/FormRegister";

const Register = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen grid items-center ">
        <AuthLayouts title="Register" desc="Register for your account">
          <FormRegister />
        </AuthLayouts>
      </div>
    </>
  );
};

export default Register;
