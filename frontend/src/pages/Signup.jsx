import { useState } from "react";
import AccountNavigate from "../components/AccountNavigate";
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

import axios from "axios";

function Signup() {
  // Signup logic here
  // writing the state of the forms
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 w-[25%] h-[62%] bg-white rounded-md px-3  shadow-lg">
        <Header label={"Sign Up"} />
        <Subheading label={"Enter your information to create your account "} />
        <InputBox
          onchange={(e) => setFirstName(e.target.value)}
          label={"First Name"}
          placeholder={"Enter firstname"}
        />
        <InputBox
          onchange={(e) => setLastName(e.target.value)}
          label={"Last Name"}
          placeholder={"Enter lastname"}
        />
        <InputBox
          onchange={(e) => setUsername(e.target.value)}
          label={"username"}
          placeholder={"Enter username"}
        />
        <InputBox
          onchange={(e) => setPassword(e.target.value)}
          label={"Password"}
          placeholder={"Enter password"}
        />
        <Button
          onPress={async () => {
            console.log(firstName + " " + lastName);
            // Call signup API here with the state of the forms
            const response = await axios.post(
              "http://localhost:5000/api/v1/user/signup",
              {
                firstName,
                lastName,
                username,
                password,
              }
            );
            // storing the token in the local storage
            localStorage.setItem("token", response.data.token);
            // Redirecting to the dashboard
          }}
          label={"Sign up"}
        />
        <AccountNavigate
          label={"Already have an account?"}
          button={"sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}

export default Signup;
