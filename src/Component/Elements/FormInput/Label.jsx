import React from "react";

const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="text-base text-headline font-bold">
        {children}
      </label>
    </>
  );
};

export default Label;
