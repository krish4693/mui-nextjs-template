"use client"
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    maxWidth: "450px",
    margin: "auto",
    marginTop: theme.spacing(4),
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
  }));
  
  const LogoContainer = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem"
  });
  
  const Logo = styled(Box)({
    width: "64px",
    height: "64px",
    backgroundColor: "#f5f5f5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  
  const GoogleButton = styled(Button)({
    width: "100%",
    padding: "12px",
    backgroundColor: "#ffffff",
    color: "#757575",
    border: "1px solid #dadce0",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      border: "1px solid #dadce0"
    }
  });

const SignUpPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    });
  
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
  
    // const validateForm = () => {
    //   const newErrors = {};
    //   if (!formData.name) newErrors.name = "Name is required";
    //   if (!formData.email) {
    //     newErrors.email = "Email is required";
    //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //     newErrors.email = "Email is invalid";
    //   }
    //   if (!formData.password) {
    //     newErrors.password = "Password is required";
    //   } else if (formData.password.length < 6) {
    //     newErrors.password = "Password must be at least 6 characters";
    //   }
    //   return newErrors;
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const newErrors = validateForm();
    //   if (Object.keys(newErrors).length === 0) {
    //     setShowSuccess(true);
    //     setFormData({ name: "", email: "", password: "" });
    //     setErrors({});
    //   } else {
    //     setErrors(newErrors);
    //   }
    // };
  
    // const handleGoogleSignUp = () => {
    //   setShowSuccess(true);
    // };
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [name]: value
    //   }));
    //   if (errors[name]) {
    //     setErrors((prev) => ({
    //       ...prev,
    //       [name]: ""
    //     }));
    //   }
    // };
  
    return (
      <Container component="main" maxWidth="sm">
        <StyledPaper elevation={3}>
          <LogoContainer>
            <Logo>
              <AiOutlineUser size={32} color="#666666" />
            </Logo>
          </LogoContainer>
  
          <Typography component="h1" variant="h5" fontWeight="bold">
            Create your account
          </Typography>
  
          <GoogleButton
            variant="outlined"
            startIcon={<FcGoogle size={20} />}
            // onClick={handleGoogleSignUp}
          >
            Sign up with Google
          </GoogleButton>
  
          <Box sx={{ width: "100%", display: "flex", alignItems: "center", my: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ px: 2 }} color="text.secondary">
              or
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
  
          <Box
            component="form"
            // onSubmit={handleSubmit}
            sx={{ width: "100%", mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
            //   onChange={handleChange}
            //   error={!!errors.name}
            //   helperText={errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
            //   onChange={handleChange}
            //   error={!!errors.email}
            //   helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
            //   onChange={handleChange}
            //   error={!!errors.password}
            //   helperText={errors.password}
            />
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Sign Up
            </Button>
          </Box>
        </StyledPaper>
  
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Sign Up Successful!
          </Alert>
        </Snackbar>
      </Container>
    );
};
  
export default SignUpPage;