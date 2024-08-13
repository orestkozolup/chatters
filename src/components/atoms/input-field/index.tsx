import TextField, { TextFieldVariants } from '@mui/material/TextField';

interface InputFieldPropsType {
  label: string,
  required: boolean,
  variant?: TextFieldVariants
};

const InputField: React.FC<InputFieldPropsType> = ({
  label,
  required,
  variant = 'filled'
}): React.ReactElement => {
  return (
    <TextField label={label} required={required} variant={variant} />
  );
};

export default InputField;
