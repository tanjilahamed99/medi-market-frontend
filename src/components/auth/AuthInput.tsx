import React from 'react';

interface AuthInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  readOnly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
}

function AuthInput({
  id,
  name,
  label,
  placeholder,
  readOnly = false,
  onChange,
  type = 'text',
  value,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className=" font-medium">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        required
        readOnly={readOnly}
        id={id}
        className="w-full text-sm border px-2 py-3 rounded-md"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default AuthInput;
