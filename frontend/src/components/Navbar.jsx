function Navbar() {
  return (
    <div className="h-[10vh] w-full flex justify-between px-4 py-3 shadow-lg items-center ">
      <div className="text-2xl text-gray-700">PayTM App</div>
      <div className="text-xl flex gap-2 items-center ">
        Hello
        <div className="text-2xl rounded-full  p-2 text-center w-[50px] bg-blue-300  ">
          U
        </div>
      </div>
    </div>
  );
}

export default Navbar;
