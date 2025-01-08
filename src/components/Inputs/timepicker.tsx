"use client";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

export default function TimeInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Controlled picker"
        //   value={value}
        //   onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}
