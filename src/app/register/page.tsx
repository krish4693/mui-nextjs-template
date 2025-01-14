"use client";
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
import Image from "next/image";
import login from "../../../public/login1.png";
import Link from "next/link";

interface FormValues {
  name: string;
  email: string;
  password: string;
  test_file: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  // maxWidth: "450px",
  margin: "auto",
  marginTop: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

// const LogoContainer = styled(Box)({
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   marginBottom: "1rem"
// });

// const Logo = styled(Box)({
//   width: "64px",
//   height: "64px",
//   backgroundColor: "#f5f5f5",
//   borderRadius: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// });

const GoogleButton = styled(Button)({
  width: "100%",
  padding: "12px",
  backgroundColor: "#ffffff",
  color: "#757575",
  border: "1px solid #dadce0",
  "&:hover": {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dadce0",
  },
});

const SignUpPage = () => {
    
  

  // const [errors, setErrors] = useState({});
  // const [showSuccess, setShowSuccess] = useState(false);

    const {
      handleSubmit,
      control,
    } = useForm<FormValues>()
  
    // const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

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
    <Container component="main" maxWidth="lg">
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
              display: {xs:"none",lg:"flex"},
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
              Create your account
            </Typography>

            <GoogleButton
              variant="outlined"
              startIcon={<FcGoogle size={20} />}
              // onClick={handleGoogleSignUp}
            >
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
                name="name"
                control={control}
                // required
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                rules={{ required: "Name is required" }}
              />
              <FormTextField
                name="email"
                control={control}
                // required
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                rules={{ required: "Email is required" }}
              />
              <FormTextField
                name="password"
                control={control}
                // required
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

              {/* <InputFileUpload /> */}
              {/* <FileInput
                name="test_file"
                label="upload image"
                control={control}
                buttonProps={{
                  variant: "outlined",
                }}
              /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, py: 1.5 }}
              >
                Sign Up
              </Button>
              <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
                Already have an account?{" "}
                <Link href="/login" passHref>
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    sx={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Log in
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
