import React, { useEffect } from "react";
import { Stack, Avatar, Typography, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { useAuth } from "../utils/auth";
import Navbar from "../components/Navbar";

const DashboardPage = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Stack>
      <Navbar />
      <Box sx={{ padding: 4 }}>
        <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
          <Stack alignItems="center" spacing={2}>
            <Avatar
              src={user?.imageUrl}
              alt={user?.name}
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h5" component="h2">
              {user?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user?.email}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<Logout />}
              onClick={handleSignOut}
              sx={{ marginTop: 2 }}
            >
              Log Out
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default DashboardPage;
