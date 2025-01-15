"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Divider,
  Alert,
  Snackbar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";

import { SubmitHandler, useForm } from "react-hook-form";
import FormTextField from "@/components/Inputs/formTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LogoContainer from "@/components/custom-containers/logoContainer";
import Image from "next/image";
import login from "../../../public/login1.png";
import Link from "next/link";
import { GoogleButton, StyledPaper } from "@/styles/customThemes";

interface FormValues {
  email: string;
  password: string;
}





const SignUpPage = () => {
   
  


  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormValues>();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data);
    setShowSuccess(true);
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ display: "flex", alignContent: "center" }}
    >
      <StyledPaper elevation={3}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "center",
              // bgcolor: "#151419",
              // borderRadius: 2,
            }}
          >
            <Image
              src={login}
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{ flex: 1, px: 3 }}>
            <LogoContainer
              size={64}
              bgColor={"#f5f5f5"}
              renderItem={() => <AiOutlineUser size={32} color="#666666" />}
            />

            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              align="center"
              sx={{ mt: 2, mb: 2 }}
            >
              Login to your account
            </Typography>

            <GoogleButton variant="outlined" startIcon={<FcGoogle size={20} />}>
              Sign up with Google
            </GoogleButton>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                my: 2,
              }}
            >
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
                rules={{ required: "Email is required" }}
              />
              <FormTextField
                name="password"
                control={control}
                fullWidth
                type={showPassword ? "text" : "password"}
                margin="normal"
                label="Password"
                variant="outlined"
                rules={{ required: "password is required" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
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
                Sign In
              </Button>
              <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
                Don&apos;t have an account?{" "}
                <Link href="/register" passHref>
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    sx={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
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
