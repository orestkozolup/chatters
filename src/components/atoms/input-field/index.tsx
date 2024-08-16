import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface InputFieldPropsType {
  required: boolean;
  label?: string;
  name?: string;
  error?: string;
  variant?: TextFieldVariants;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const InputField: React.FC<InputFieldPropsType> = ({
  label,
  required,
  name,
  error,
  onChange,
  variant = "filled",
  placeholder,
  inputRef,
}): React.ReactElement => {
  return (
    <TextField
      inputRef={inputRef}
      label={label}
      required={required}
      variant={variant}
      name={name}
      error={!!error}
      helperText={error}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
