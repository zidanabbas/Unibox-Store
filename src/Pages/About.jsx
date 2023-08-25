import React from "react";
import Header from "../Component/Headers/Header";
const About = () => {
  return (
    <>
      <Header />
      <section className="pt-24 pb-36">
        <div className="container p-2 min-h-screen px-7 bg-slate-500">
          <h4 className="font-poppins text-headline text-center font-bold">
            ini adalah halaman About
          </h4>
        </div>
      </section>
    </>
  );
};

export default About;
