// eslint-disable-next-line react/prop-types
function InputBox({ label, placeholder }) {
  return (
    <div className="font-bold flex flex-col gap-1">
      {label}
      <input
        className="border py-1 px-2 rounded-sm border-gray-400"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
