import AccountNavigate from "../components/AccountNavigate";
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

function Signup() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 w-[25%] h-[62%] bg-white rounded-md px-3  shadow-lg">
        <Header label={"Sign Up"} />
        <Subheading label={"Enter your information to create your account "} />
        <InputBox label={"First Name"} placeholder={"Enter firstname"} />
        <InputBox label={"Last Name"} placeholder={"Enter lastname"} />
        <InputBox label={"Email"} placeholder={"Enter email"} />
        <InputBox label={"Password"} placeholder={"Enter password"} />
        <Button label={"Sign up"} />
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
