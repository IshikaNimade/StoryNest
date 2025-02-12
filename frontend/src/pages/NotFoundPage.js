import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h1" fontWeight="bold" color="#e7dfd8" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you are looking for doesn't exist.
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ marginBottom: 3 }}
      >
        It might have been removed or the URL might be incorrect.
      </Typography>
      <Button
        variant="contained"
        color="#e7dfd8"
        onClick={handleGoBack}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
