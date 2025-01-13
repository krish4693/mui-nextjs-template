import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController,ControllerProps } from 'react-hook-form';

interface FormTextFieldProps extends Omit<TextFieldProps, 'name' | 'defaultValue'|  'rules'> {
  name: string;
  control: ControllerProps['control'];
  defaultValue?: ControllerProps['defaultValue'];
  rules?: ControllerProps['rules'];
}


const FormTextField:React.FC<FormTextFieldProps> =  ({ name, control, defaultValue, rules, ...textFieldProps }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules });

    return (
      /*
       -some types to change behaviour of text field
       -"password"
       -"number"
       -"search"
       -use "multiline" prop to change into multiline
      */
        <TextField
      {...textFieldProps}
      inputRef={ref}
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={error?.message || textFieldProps.helperText}
    />
  );
};

export default FormTextField;
