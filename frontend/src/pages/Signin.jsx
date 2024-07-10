import AccountNavigate from "../components/AccountNavigate";
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

function Signin() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-200 ">
      <div className="flex flex-col gap-1 w-[25%] h-fit bg-white rounded-md px-3  shadow-lg">
        <Header label={"Sign in"} />
        <Subheading label={"Enter your information to signin your account "} />
        <InputBox label={"Username"} placeholder={" Enter username"} />
        <InputBox label={"Password"} placeholder={"Enter password"} />
        <Button label={"Sign in"} />
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
