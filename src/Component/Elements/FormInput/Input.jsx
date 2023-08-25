import React from "react";

const Input = (props) => {
  const { placeholder, type, name } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="w-full bg-slate-100 text-background py-2 px-3 rounded-md focus:outline-none focus:ring-btnSecondary focus:ring-1 focus:border-buttonColor placeholder:opacity-50"
    />
  );
};

export default Input;
