import { Container, Typography } from "@mui/material";
import TimeInput from "@/components/Inputs/timepicker";
import DateRange from "@/components/Inputs/timerange";

export default function Home() {
  return (
    <div>
      <Container sx={{ bgcolor:'primary.main' , height: '100vh',p:'1' }}>
        <Typography variant="h1" sx={{p:1,':hover':{bgcolor:'darkblue'}}}>
          Hello World
        </Typography>
        <TimeInput />
        <DateRange/>
      </Container>
    </div>
  );
}
