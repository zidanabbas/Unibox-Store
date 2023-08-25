const Button = (props) => {
  const {
    children,
    classname = "bg-btnPrimary",
    onClick = () => {},
    type = "button",
    ariaLabel,
  } = props;
  return (
    <>
      <button
        className={`h-10 px-6 text-base rounded-md ${classname} text-btnSecondary duration-500`}
        type={type}
        onClick={() => onClick()}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
