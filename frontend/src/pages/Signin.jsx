import { useState } from "react";
import AccountNavigate from "../components/AccountNavigate";
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [username, setUser]=useState("")
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword]=useState("")
  const handleForm =async()=>{
    const res = await axios.post("http://localhost:5000/api/v1/user/signin",{username:username,password:password})
    if(res.data.message.includes("successfully")){
      navigate("/dashboard")
    }
    
  }
  // Signin logic here
  
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 w-[25%] h-fit bg-white rounded-md px-3  shadow-lg">
        <Header label={"Sign in"} />
        <Subheading label={"Enter your information to signin your account "} />
        <InputBox  onchange={(e) => setUser(e.target.value)} label={"Username"} placeholder={" Enter username"} />
        <InputBox  onchange={(e) => setPassword(e.target.value)} label={"Password"} placeholder={"Enter password"} />
        <Button onPress={()=>{
          handleForm()
        }} label={"Sign in"} />
        <AccountNavigate
          label={"New to paytm?"}
          button={"sign in"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}

export default Signin;
