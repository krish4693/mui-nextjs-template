"use client";
import FormTextField from "@/components/Inputs/formTextField";
import RadioButtons from "@/components/Inputs/radioGroup";
import { Box, Paper, Radio } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface optionTypes {
  value: string | number;
  label: string;
}

export default function page() {
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm();
  const [options, setOptions] = useState<optionTypes[]>([]);
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box
      component="form"
      //   onSubmit={handleSubmit(onSubmit)}
      sx={{
        m: 2,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
        gap: 1, // Add spacing between items
      }}
    >
      <Box>
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <FormTextField
          name="email"
          control={control}
          margin="normal"
          variant="standard"
        />
      </Box>
      <FormTextField
        name="email"
        control={control}
        margin="normal"
        variant="standard"
      />
      <FormTextField
        name="email"
        control={control}
        margin="normal"
        variant="standard"
      />
      <FormTextField
        name="email"
        control={control}
        margin="normal"
        variant="standard"
      />
    </Box>
  );
}
