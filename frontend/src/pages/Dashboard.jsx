import Balance from "../components/Balance";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import SingleUser from "../components/SingleUser";

function Dashboard() {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Navbar />
      <div className="w-[90%] flex flex-col  gap-3 ">
        <Balance />
        <InputBox label={"Users"} placeholder={"Search Users..."} />
        <SingleUser />
      </div>
    </div>
  );
}

export default Dashboard;
