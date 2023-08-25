import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between relative px-4">
        <div className="first-letter:uppercase font-semibold">
          <Link to={"/"} className="">
            Shopcart
          </Link>
        </div>
        <nav className="hidden absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:shadow-none lg-rounded-none">
          <ul className="block lg:flex p-2 gap-6">
            <li className="group">
              <Link to="/" className="text-base py-2 text-headline">
                Home
              </Link>
            </li>
            <li className="group">
              <Link to="/about" className="text-base py-2 text-headline">
                About
              </Link>
            </li>
            <li className="group">
              <Link to="/categories" className="text-base py-2 text-headline">
                Categories
              </Link>
            </li>
            <li className="group">
              <Link to="/products" className="text-base py-2 text-headline">
                Product
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-x-2 text-btnSecondary">
          <Link to="/login">
            <Button classname="bg-btnPrimary hover:bg-amber-500">Login</Button>
          </Link>
          <Link to="/register">
            <Button classname="bg-btnPrimary hover:bg-amber-500">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
