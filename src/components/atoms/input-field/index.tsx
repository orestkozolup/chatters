import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { ChangeEvent, forwardRef } from 'react';

interface InputFieldPropsType {
  required: boolean;
  label?: string;
  name?: string;
  error?: string;
  variant?: TextFieldVariants;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  placeholder?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldPropsType>(({
  label,
  required,
  name,
  error,
  onChange,
  variant = "filled",
  placeholder
}, ref): React.ReactElement => {
  return (
    <TextField
      inputRef={ref}
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
});

InputField.displayName = "InputField";

export default InputField;
