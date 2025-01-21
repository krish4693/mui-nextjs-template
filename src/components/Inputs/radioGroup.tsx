import * as React from "react";
import Radio from "@mui/material/Radio";
import { RadioGroup, RadioGroupProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { FormHelperText } from "@mui/material";

interface FormRadioGroupProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<RadioGroupProps, "name" | "defaultValue"> {
  label: string;
  options: { value: string | number; label: string }[];
}

const RadioButtons = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  options,
  defaultValue,
  ...radioGroupProps
}: FormRadioGroupProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl fullWidth margin="normal">
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        {...field}
        value={field.value ?? ""}
        onChange={handleChange}
        {...radioGroupProps}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio />}
          />
        ))}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
      </RadioGroup>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default RadioButtons;
