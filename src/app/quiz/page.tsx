"use client";
import FormTextField from "@/components/Inputs/formTextField";
import RadioButtons from "@/components/Inputs/radioGroup";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];
  return (
    <Box
      component="form"
      //   onSubmit={handleSubmit(onSubmit)}
      sx={{
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          alignSelf: "flex-start", // Align question to the left
          mb: 2, // Add spacing below the question
        }}
      >
        Quiz
      </Typography>
      <Typography
        variant="h6"
        sx={{
          alignSelf: "flex-start", // Align question to the left
          mb: 2, // Add spacing below the question
        }}
      >
        Question 1
      </Typography>
      <RadioButtons
        name="selectedOption"
        control={control}
        label="Select the correct answer"
        options={options}
        rules={{ required: "Please select an option" }}
        defaultValue="" // Initial value (optional)
        row
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
          gap: 2, // Add spacing between items
        }}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
  );
}
