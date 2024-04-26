import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  iconAlt: string;
  iconPath: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  isError: boolean;
}

export default function DefaultTextField({
  placeholder,
  iconAlt,
  iconPath,
  value,
  errorMessage,
  onChange,
  onIconClick,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div>
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
