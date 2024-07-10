import Button from "./Button";

function SingleUser() {
  return (
    <div className="flex w-full  justify-between">
      <div
        className="flex gap-2 items-center justify-center
      "
      >
        <p className=" w-[50px] rounded-full h-[50px] bg-blue-300 text-center pt-[6px] text-2xl font-bold">
          H
        </p>
        <p className="font-bold">Harkirat Singh</p>
      </div>
      <Button label={"Send Money"} />
    </div>
  );
}

export default SingleUser;
