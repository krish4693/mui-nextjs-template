"use client"
import { DateTimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';



export default function DateInput() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Enter Date"
          value={new Date()}
          onChange={(date) => console.log(date)}
        />
      </LocalizationProvider>
  
  )
}