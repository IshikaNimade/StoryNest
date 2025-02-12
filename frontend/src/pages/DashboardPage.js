import React, { useEffect } from "react";
import { Stack, Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Stack direction="column" sx={{ height: "100vh", overflow: "hidden" }}>
      <Stack direction="row" sx={{ flex: 1 }}>
        <Sidebar
          user={user}
          handleNavigation={handleNavigation}
          handleLogout={handleLogout}
        />
        <Box sx={{ flex: 1, padding: 4 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to the Dashboard
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Use the sidebar to navigate to different sections.
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Stack>
  );
};

export default DashboardPage;
