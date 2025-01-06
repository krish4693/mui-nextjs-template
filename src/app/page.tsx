import Image from "next/image";
import { Container, Typography } from "@mui/material";
import DateInput from "@/components/datePicker";

export default function Home() {
  return (
    <div>
      <Container sx={{ bgcolor: 'tomato', height: '100vh',p:'1' }}>
        <Typography variant="h1" sx={{p:1,':hover':{bgcolor:'darkblue'}}}>
          Hello World
        </Typography>
      </Container>
    </div>
  );
}
