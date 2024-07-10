// eslint-disable-next-line react/prop-types
function Button({ label }) {
  return (
    <button className="mt-3 py-2 font-bold text-white hover:text-black transition-all ease-in-out duration-300 px-5 border bg-black hover:border-black rounded-md hover:bg-white ">
      {label}
    </button>
  );
}

export default Button;
