import * as React from "react";
import { Radio, RadioProps } from "@mui/material";
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
    Omit<RadioProps, "name" | "defaultValue"> {
  label?: string;
  option: { value: string | number; label: string };
}

const FormRadio = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  option,
  defaultValue,
  ...radioGroupProps
}: FormRadioGroupProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  // const [value, setValue] = React.useState("female");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (
    <FormControl margin="normal">
      <FormLabel id="radio-group-label">{label}</FormLabel>
      <Radio
        {...field}
        // value={field.value ?? ""}
        // onChange={handleChange}
        {...radioGroupProps}
      >
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio />}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 1,
              my:2,
              marginLeft: 0, // Reset default margin
              marginRight: 0, // Reset default margin
            }}
 
          />
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
      </Radio>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default FormRadio;
