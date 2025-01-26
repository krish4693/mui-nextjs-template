import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  ColorlibConnector,
  ColorlibStepIcon,
  QontoConnector,
  QontoStepIcon,
} from "@/styles/steeperThemes";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              slots={{
                stepIcon: QontoStepIcon,
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              slots={{
                stepIcon: ColorlibStepIcon,
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
