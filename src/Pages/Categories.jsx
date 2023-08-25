import React from "react";
import Header from "../Component/Headers/Header";

const Categories = () => {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center p-2 min-h-screen px-7 flex-col bg-white">
        <h1 className="font-poppins text-background text-center font-bold text-3xl">
          Oops!
        </h1>
        <p className="my-5 text-x text-background">
          Sorry, this page is currently under maintenance
        </p>
      </section>
    </>
  );
};

export default Categories;
