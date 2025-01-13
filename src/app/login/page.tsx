"use client"
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Divider,
  Alert,
  Snackbar,

  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";

import { SubmitHandler, useForm } from "react-hook-form";
import FormTextField from "@/components/Inputs/formTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LogoContainer from "@/components/custom-containers/logoContainer";

interface FormValues {
  email: string;
  password: string;
}


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
   
  


    const {
      handleSubmit,
      control,
    } = useForm<FormValues>()
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
  };

  
    return (
      <Container component="main" maxWidth="sm">
        <StyledPaper elevation={3}>

          <LogoContainer  
            size={64}
            bgColor={"#f5f5f5"}
            renderItem={() => <AiOutlineUser size={32} color="#666666" />}/>
             

          <Typography component="h1" variant="h5" fontWeight="bold">
            Login to your account
          </Typography>
  
          <GoogleButton
            variant="outlined"
            startIcon={<FcGoogle size={20} />}
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


            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: "100%", mt: 1 }}
          >
            
            <FormTextField
              name="email"
              control={control}
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              rules={{ required: 'Email is required' }}
            />
           <FormTextField
              name="password"
              control={control}
              fullWidth
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              label="Password"
              variant="outlined"
              rules={{ required: 'password is required' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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