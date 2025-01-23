"use client";

import FormTextField from "@/components/Inputs/formTextField";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { DeleteOutlineOutlined } from "@mui/icons-material";

interface OptionType {
  id: number;
  label: string;
  value: string | number;
}

interface FormValues {
  selectedOption: string;
  question: string;
  options: OptionType[];
  correctOption: number;
}

export default function Page() {
  const { handleSubmit, control, setValue, watch, getValues } =
    useForm<FormValues>({
      defaultValues: {
        question: "",
        options: [
          { id: 1, label: "Option 1", value: "" },
          { id: 2, label: "Option 2", value: "" },
          { id: 3, label: "Option 3", value: "" },
          { id: 4, label: "Option 4", value: "" },
        ],
        correctOption: 0,
      },
    });
  const options = watch("options");

  const handleAddOption = () => {
    const newOptionId = options.length + 1;
    const newOption: OptionType = {
      id: newOptionId,
      label: `Option ${newOptionId}`,
      value: "",
    };
    setValue("options", [...options, newOption]);
  };

  const [selectedOption, setSelectedOption] = useState<number>();

  const handleCheckboxChange = (index: number) => {
    setSelectedOption(index);
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };
  const handleDeleteOption = (index: number) => {
    const currentOptions = getValues("options");

    const updatedOptions = currentOptions.filter((_, i) => i !== index);
    setValue("options", updatedOptions);

    // Optional: Reset "correctOption" if the selected option is deleted
    if (getValues("correctOption") === index + 1) {
      setValue("correctOption", 0);
    }
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
        rules={{ required: "Question is required" }}
      />
      <Controller
        name="correctOption"
        control={control}
        rules={{
          validate: (value) => value !== 0 || "Please select a correct option",
        }}
        render={({ fieldState: { error } }) => (
          <>
            {error && (
              <FormHelperText error sx={{ my: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
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
                  sx={{ mt: 4 }}
                  checked={selectedOption === index}
                  onChange={() => {
                    handleCheckboxChange(index);
                    field.onChange(index + 1); // Update form value
                  }}
                  color="success"
                />
              )}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FormTextField
                name={`options.${index}.value`}
                control={control}
                label={`Option ${index + 1}`}
                variant="standard"
                rules={{ required: "Answer is required" }}
              />
              <IconButton
                sx={{ mt: 4 }}
                aria-label="delete"
                color="error"
                onClick={() => handleDeleteOption(index)} // Add this function to handle deletion
              >
                <DeleteOutlineOutlined />
              </IconButton>
            </Box>
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
