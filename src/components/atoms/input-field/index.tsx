import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface InputFieldPropsType {
  label: string;
  required: boolean;
  name?: string;
  error?: string;
  variant?: TextFieldVariants;
}

const InputField: React.FC<InputFieldPropsType> = ({
  label,
  required,
  name,
  error,
  variant = "filled",
}): React.ReactElement => {
  return (
    <TextField
      label={label}
      required={required}
      variant={variant}
      name={name}
      error={!!error}
      helperText={error}
    />
  );
};

export default InputField;
