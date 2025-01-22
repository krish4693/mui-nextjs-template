"use client";

import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Button,
} from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

interface CheckboxOption {
    id: number;
    label: string;
    value: string;
}


interface CheckboxesGroupProps extends FieldValues {
  options: CheckboxOption[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxesGroup({ options ,control,onChange }: CheckboxesGroupProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend"> </FormLabel>
        <FormGroup>
          {options.map((option) => (
            <Controller
              key={option.id}
              control={control}
              name={`${option.id}`}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value === option.value} // Check only the selected option
                      onChange={onChange}
                    />
                  }
                  label={option.label}
                />
              )}
            />
          ))}
        </FormGroup>
        <FormHelperText>Select responsibilities</FormHelperText>
      </FormControl>

      {/* Submit Button */}
      {/* <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>

      <Box>
        <strong>Current Values:</strong>
        <pre>{JSON.stringify(checkedValues, null, 2)}</pre>
      </Box> */}
    </Box>
  );
}
