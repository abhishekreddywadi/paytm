/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import Button from "./Button";


function SingleUser({user}) {
  const navigate=useNavigate()
  
  return (
    <div className="flex w-full  justify-between">
      <div
        className="flex gap-2 items-center justify-center
      "
      >
        <p className=" w-[50px] rounded-full h-[50px] bg-blue-300 text-center pt-[6px] text-2xl font-bold">
          {user.firstName.charAt(0)}
        </p>
        <p className="font-bold">{user.firstName}</p>
      </div>
      <Button label={"Send Money"}  onPress={()=>(
        
        navigate("/send",{state:user}))} />
    </div>
  );
}

export default SingleUser;
