// import Input from "../shared/inputs/Input";

function RememberMe() {
  return (
    <div className="flex items-center gap-2  cursor-pointer">
      {/* <Input type="checkbox" id="remember" className="border " /> */}
      <label htmlFor="remember" className=" cursor-pointer">
        Remember me
      </label>
    </div>
  );
}

export default RememberMe;
