import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Google from "../assets/googleLogo.png";

const LoginButton = () => {
  const navigate = useNavigate();
  const { signInUser, loginError } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInUser();
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <Stack spacing={2} paddingTop={"10px"}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "16px",
          padding: "10px 18px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          borderRadius: "20%",
        }}
        onClick={handleSignIn}
      >
        <img
          src={Google}
          alt="Google Logo"
          style={{ width: "24px", height: "24px" }}
        />
        Sign in with Google
      </Button>
      {loginError && <Typography color="error">{loginError}</Typography>}
    </Stack>
  );
};

export default LoginButton;
