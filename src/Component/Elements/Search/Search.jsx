const Search = (props) => {
  const { placeholder, type = "text", classname, value, onChange } = props;

  return (
    <>
      <div className="p-2 w-full">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-48 focus:outline-none rounded-md ${classname}`}
          value={value}
        />
      </div>
    </>
  );
};

export default Search;
