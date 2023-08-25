import Navbar from "./Navbar";
// import NavbarMobile from "./NavbarMobile";

const Header = () => {
  return (
    <>
      <header className="flex fixed bg-background h-16 top-0 items-center left-0 w-full px-5 text-headline font-Poppins z-10 shadow-lg">
        <Navbar />
        <div className="md:hidden px-2 border">
          X
          <div className="absolute left-0 w-full top-0">
            {/* <NavbarMobile /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
