// eslint-disable-next-line react/prop-types
function InputBox({ label, placeholder, onchange }) {
  return (
    <div className="font-bold flex flex-col gap-1">
      {label}
      <input
        onChange={onchange}
        className="border py-1 px-2 rounded-sm border-gray-400"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
