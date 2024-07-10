import FriendsName from "../components/FriendsName";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

function SendMoney() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 lg:w-[25%] lg:h-[38%] bg-white rounded-md px-3  shadow-lg">
        <Header label={"Send Money"} />
        <Subheading label={"Send money to your money "} />
        <FriendsName />
        <InputBox label={"Amount (in Rs)"} placeholder={" Enter username"} />
        <button className="mt-3 py-2 font-bold text-white hover:text-black transition-all ease-in-out duration-300 px-5 border bg-green-600 hover:border-black rounded-md hover:bg-white ">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney;
