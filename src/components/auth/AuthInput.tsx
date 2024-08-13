// import Input from "../shared/inputs/Input";

function AuthInput({
  id,
  name,
  label,
  placeholder,
  readOnly,
  onChange,
  ...props
}: any) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-label font-medium">
        {label}
      </label>
      {/* <Input
        onChange={onChange}
        name={name}
        required
        readOnly={readOnly}
        id={id}
        className="w-full text-sm"
        placeholder={placeholder}
        {...props}
      /> */}
    </div>
  );
}

export default AuthInput;
