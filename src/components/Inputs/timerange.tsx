"use client";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import  { Dayjs } from "dayjs";
export default function DateRange() {
    const [startTime, setStartTime] = useState<Dayjs | null>(null);
    const [endTime, setEndTime] = useState<Dayjs | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);
  
    const handleFromTimeChange = (newValue: Dayjs | null) => {
      setStartTime(newValue);
      if (endTime && newValue && newValue.isAfter(endTime)) {
        setError('From time cannot be later than To time');
      } else {
        setError(null);
      }
    };
  
    const handleToTimeChange = (newValue: Dayjs | null) => {
      setEndTime(newValue);
      if (startTime && newValue && newValue.isBefore(startTime)) {
        setError('To time cannot be earlier than From time');
      } else {
        setError(null);
      }
    };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <TimePicker
          label="From"
          value={startTime}
          onChange={handleFromTimeChange}
        />
        <TimePicker
          label="To"
          value={endTime}
          onChange={handleToTimeChange}
        />
      </div>
    </LocalizationProvider>
  );
}
