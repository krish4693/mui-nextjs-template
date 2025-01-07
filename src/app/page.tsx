import theme from "@/theme";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Container sx={{ bgcolor:'primary.main' , height: '100vh',p:'1' }}>
        <Typography variant="h1" sx={{p:1,':hover':{bgcolor:'darkblue'}}}>
          Hello World
        </Typography>
      </Container>
    </div>
  );
}
