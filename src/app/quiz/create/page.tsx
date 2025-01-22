"use client";

import FormRadio from "@/components/Inputs/formRadio";
import FormTextField from "@/components/Inputs/formTextField";
import { Box, Button, Checkbox, Paper, Radio } from "@mui/material";
import React, { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";

interface OptionType {
  id: number;
  label: string;
  value: string;
}

interface FormValues {
  selectedOption: string;
  question: string;
  options: OptionType[];
  correctAnswer: string;
}

export default function Page() {
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      question: "",
      options: [],
    },
  });
  const [checked, setChecked] = useState(true);

  const options = watch("options");
  const correctAnswer = watch("correctAnswer");

  const handleAddOption = () => {
    const newOptionId = options.length + 1;
    const newOption: OptionType = {
      id: newOptionId,
      label: `Option ${newOptionId}`,
      value: "",
    };
    setValue("options", [...options, newOption]);
  };

  const handleSetCorrectAnswer = (optionId: number) => {
    setValue("correctAnswer", `option-${optionId}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ m: 2 }}>
      {/* Question Input */}
      <FormTextField
        name="question"
        label="Question"
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        control={control}
        margin="normal"
      />
      {/* Options List */}
      <Box
        sx={{
          my: 2,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        {options.map((option, index) => (
          <Box>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              color="success"
              inputProps={{ "aria-label": "controlled" }}
            />
            <FormTextField
              name={`options.${index}.value`}
              control={control}
              label={`Option ${index + 1}`}
              variant="standard"
            />
          </Box>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={handleAddOption}>
          Add Option
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
