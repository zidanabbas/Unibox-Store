const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2 min-h-screen px-7 flex-col bg-white">
        <h1 className="font-poppins text-background text-center font-bold text-3xl">
          Oops!
        </h1>
        <p className="my-5 text-x text-background">
          Sorry, an unexpected error has occured
        </p>
      </div>
    </>
  );
};

export default NotFound;
