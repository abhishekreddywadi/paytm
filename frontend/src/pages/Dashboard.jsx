import AllUsers from "../components/AllUsers";
import Balance from "../components/Balance";
import Navbar from "../components/Navbar";
// import SingleUser from "../components/SingleUser";

function Dashboard() {
  // eslint-disable-next-line no-unused-vars

  // Search functionality here
 
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Navbar />
      <div className="w-[90%] flex flex-col  gap-3 ">
        <Balance />
        <AllUsers  />
      </div>
    </div>
  );
}

export default Dashboard;
