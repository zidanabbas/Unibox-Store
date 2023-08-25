import React from "react";
import Header from "../Component/Headers/Header";
import AuthLayouts from "../Layouts/AuthLayouts";
import FormLogin from "../Component/Elements/Fragment/FormLogin";

const Login = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen grid items-center">
        <AuthLayouts title="Login" desc="login for your account">
          <FormLogin />
        </AuthLayouts>
      </section>
    </>
  );
};

export default Login;
