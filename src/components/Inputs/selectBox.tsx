import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface SelectFieldProps {
    label: string;
    options: { value: string | number; label: string }[];
  }
  
  const SelectField: React.FC<SelectFieldProps> = ({ label, options, ...selectProps }) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event: SelectChangeEvent<unknown>) => {
      setValue(event.target.value as string);
    };
  
    return (
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange} {...selectProps}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  export default SelectField;