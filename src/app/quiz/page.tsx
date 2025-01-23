"use client";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function page() {
  const {
    control,
  } = useForm();
  const options = [
    { id: 1, value: "option1", label: "Option 1" },
    { id: 2, value: "option2", label: "Option 2" },
    { id: 3, value: "option3", label: "Option 3" },
    { id: 4, value: "option4", label: "Option 4" },
  ];

  const [selectedOption, setSelectedOption] = useState<number>();

  const handleCheckboxChange = (index: number) => {
    setSelectedOption(index);
  };
  return (
    <Box
      component="form"
      //   onSubmit={handleSubmit(onSubmit)}
      sx={{
        m: 2,
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
      {/* Options List */}
      <Box
         sx={{
          my: 2,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        {options?.map((option, index) => (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            key={option.id}
          >
            <Controller
              name="correctOption"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={selectedOption === index}
                  onChange={() => {
                    handleCheckboxChange(index);
                    field.onChange(index + 1); // Update form value
                  }}
                  color="success"
                />
              )}
            />
            <Typography
              variant="subtitle1"
            >
              {option.value}
            </Typography>
            {/* <FormTextField
              name={`options.${index}.value`}
              control={control}
              label={`Option ${index + 1}`}
              variant="standard"
              rules={{ required: "Answer is required" }}
            /> */}
          </Box>
        ))}
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
