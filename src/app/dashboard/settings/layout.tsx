import React from "react";
import Container from "@mui/material/Container";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {children}
    </Container>
  );
};

export default PageLayout;
