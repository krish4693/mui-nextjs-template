import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController, FieldValues, UseControllerProps } from 'react-hook-form';


const FormTextField =  ({ name, control, defaultValue, rules, ...textFieldProps }: any) => {
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
