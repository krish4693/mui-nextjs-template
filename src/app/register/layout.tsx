import React from "react";
import { Box, Container, Paper } from "@mui/material";
import Image from "next/image";
import login from "../../../public/login1.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 2,
          display: "flex",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={login}
            alt="Login Illustration"
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "contain",
            }}
            priority
          />
        </Box>

        <Box sx={{ flex: 1, px: 3 }}>{children}</Box>
      </Paper>
    </Container>
  );
};

export default AuthLayout;
