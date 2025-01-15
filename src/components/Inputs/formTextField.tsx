import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';

interface FormTextFieldProps<T extends FieldValues>
  extends UseControllerProps<T>,
  Omit<TextFieldProps, 'name' | 'defaultValue'> {
    control?: UseControllerProps<T>['control'];
  }

const FormTextField = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  ...textFieldProps
}: FormTextFieldProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules });
  if (!control) {
    return (
      <TextField
        {...textFieldProps}
        name={name}
        defaultValue={defaultValue || ''}
      />
    );
  }
  
  return (
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
