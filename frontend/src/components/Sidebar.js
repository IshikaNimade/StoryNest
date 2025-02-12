import { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Article as BlogsIcon,
  Mic as PodcastIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  Forum as ForumIcon,
} from "@mui/icons-material";
import LogoutDialog from "./LogoutDialog";

const Sidebar = ({ user, handleNavigation, handleLogout }) => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const confirmLogout = () => {
    handleLogout();
    setOpenLogoutDialog(false);
  };

  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#e7dfd8",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: "1px solid #ddd",
      }}
    >
      {/* Profile Section */}
      <Avatar
        src={user?.photoURL}
        alt={user?.name}
        sx={{ width: 80, height: 80, marginBottom: 2 }}
      />
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        {user?.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign="center">
        {user?.email}
      </Typography>

      {/* Navigation List */}
      <List sx={{ width: "100%", marginTop: 3 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/profile")}>
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/messages")}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/podcast")}>
            <ListItemIcon>
              <PodcastIcon />
            </ListItemIcon>
            <ListItemText primary="Podcast" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/blogs")}>
            <ListItemIcon>
              <BlogsIcon />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogoutClick}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>

      <LogoutDialog
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
        onConfirm={confirmLogout}
      />
    </Box>
  );
};

export default Sidebar;
