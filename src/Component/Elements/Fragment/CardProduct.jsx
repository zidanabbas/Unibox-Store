import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-80 max-w-sm bg-gray-900 border-black-300 rounded-lg shadow flex flex-col justify-around">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <div className="rounded-t-lg h-60 overflow-hidden object-cover">
        <Link to="">
          <img
            src={image}
            alt="product"
            className="hover:scale-110 duration-700"
          />
        </Link>
      </div>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="px-5 py-2 text-headline">
        <Link to="#">
          <h5 className="text-xl font-semibold font-Poppins cursor-pointer">
            {title.substring(0, 20)} ...
          </h5>
          <p className="text-base font-Poppins py-2">
            {children.substring(0, 150)}
          </p>
        </Link>
      </div>
    </>
  );
};
const Footer = (props) => {
  const { price, children, id } = props;
  return (
    <>
      <div className="px-5 pb-5 flex items-center justify-between">
        <span className="text-xl font-bold text-headline">
          ${" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </span>
        <Link to={`/product/${id}`}>
          <Button classname="bg-btnPrimary text-btnSecondary font-Poppins w-32 text-xs font-semibold hover:bg-amber-500">
            {children}
          </Button>
        </Link>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
