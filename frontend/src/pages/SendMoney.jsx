import { useLocation } from "react-router-dom";
import FriendsName from "../components/FriendsName";
import Header from "../components/Header";
import Subheading from "../components/Subheading";
import {  useState } from "react";
import axios from "axios";

function SendMoney() {
  const {state}=useLocation()
  const id = state.id
  console.log(state.id);
  const sendHandler=async()=>{
   const res= await axios.post("http://localhost:5000/api/v1/account/transfer",{amount:100,to:id},{
    headers: {
      'Authorization': 'Bearer '+localStorage.getItem('token')
    }
   })
   alert(res.data.message);

  }
 
  // eslint-disable-next-line no-unused-vars
  const [amount,setamount] = useState();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 lg:w-[25%] lg:h-[38%] bg-white rounded-md px-3  shadow-lg">
        <Header label={"Send Money"} />
        <Subheading label={"Send money to your money "} />
        <FriendsName />
        <input onChange={(e)=>setamount(e.target.value)} type="number" placeholder={" Enter Amount"} />
        <button onClick={()=>sendHandler()} className="mt-3 py-2 font-bold text-white hover:text-black transition-all ease-in-out duration-300 px-5 border bg-green-600 hover:border-black rounded-md hover:bg-white ">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney;
