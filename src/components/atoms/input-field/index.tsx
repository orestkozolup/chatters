import TextField, { TextFieldVariants } from '@mui/material/TextField';

interface InputFieldPropsType {
  label: string,
  required: boolean,
  name?: string,
  variant?: TextFieldVariants
};

const InputField: React.FC<InputFieldPropsType> = ({
  label,
  required,
  name,
  variant = 'filled'
}): React.ReactElement => {
  return (
    <TextField label={label} required={required} variant={variant} name={name} />
  );
};

export default InputField;
