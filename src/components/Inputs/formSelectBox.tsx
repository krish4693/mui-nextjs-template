import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectProps,
} from '@mui/material';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';

interface FormSelectFieldProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<SelectProps, 'name' | 'defaultValue'> {
  label: string;
  options: { value: string | number; label: string }[];
}

const FormSelectField = <T extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  label,
  options,
  ...selectProps
}: FormSelectFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  return (
    <FormControl fullWidth margin="normal" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...selectProps}  value={field.value ?? ''} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default FormSelectField;
