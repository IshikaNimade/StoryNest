import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  Badge,
  Stack,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#e7dfd8", padding: "20px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography variant="h2" fontFamily={"revert-layer"} color="black">
              StoryNest
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
