import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { resourceConfigs } from "../../data/resourceConfigs";

const drawerWidth = 260;

export default function AppShell() {
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: "rgba(248,250,252,0.94)",
          color: "#12303b",
          borderBottom: "1px solid rgba(18,48,59,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              Shikshasora Admin
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage institutes, academics, operations, and collections
            </Typography>
          </Box>

          <Avatar sx={{ bgcolor: "#0f766e" }}>
            {user?.fullName?.charAt(0)?.toUpperCase() || "A"}
          </Avatar>

          <Box sx={{ minWidth: 160 }}>
            <Typography fontWeight={700}>{user?.fullName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.role?.replaceAll("_", " ")}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(18,48,59,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,249,255,0.95))",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="overline" color="text.secondary">
            Navigation
          </Typography>
          <List sx={{ mt: 1 }}>
            <ListItemButton
              component={NavLink}
              to="/dashboard"
              selected={location.pathname === "/dashboard"}
              sx={{ borderRadius: 2, mb: 1 }}
            >
              <ListItemText primary="Overview" />
            </ListItemButton>
            {resourceConfigs.map((resource) => (
              <ListItemButton
                key={resource.key}
                component={NavLink}
                to={`/dashboard/${resource.path}`}
                selected={location.pathname === `/dashboard/${resource.path}`}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemText
                  primary={resource.label}
                  secondary={resource.description}
                />
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" color="text.secondary">
            Public website
          </Typography>
          <Button
            component={NavLink}
            to="/"
            variant="text"
            sx={{ mt: 1, px: 0 }}
          >
            Open landing page
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: "transparent" }}>
        <Toolbar />
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
