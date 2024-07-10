import Balance from "../components/Balance";
import Navbar from "../components/Navbar";
import SingleUser from "../components/SingleUser";

function Dashboard() {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Navbar />
      <div className="w-[90%] ">
        <Balance />
        <SingleUser />
      </div>
    </div>
  );
}

export default Dashboard;
