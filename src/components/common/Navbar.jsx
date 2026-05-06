import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

// Icons
import LoginIcon from "@mui/icons-material/Login";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  // Mobile Drawer State
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  // Desktop Dropdown State
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Results", path: "/results" },
    { title: "Contact", path: "/contact" },
  ];

  // --- TOP UTILITY BAR COMPONENT ---
  const TopBar = () => (
    <Box
      sx={{
        bgcolor: "#0f172a", // Dark Navy
        color: "rgba(255,255,255,0.8)",
        py: 1,
        fontSize: "0.85rem",
        display: { xs: "none", md: "block" }, // Hide on mobile
      }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 16, color: "#facc15" }} />
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
              +91 98765 43210
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ fontSize: 16, color: "#facc15" }} />
            <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
              admissions@ShikshaSora.in
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer", "&:hover": { color: "#facc15" } }}
          >
            Careers
          </Typography>
          <Typography
            variant="caption"
            sx={{ cursor: "pointer", "&:hover": { color: "#facc15" } }}
          >
            Notice Board
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  return (
    <>
      <TopBar />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          color: "#333",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 70 }}>
            
            {/* --- LOGO --- */}
            <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#1e3a8a", fontSize: 32 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#1e3a8a", // Academic Blue
                textDecoration: "none",
                flexGrow: 1,
                cursor: 'pointer'
              }}
            >
              ShikshaSora
            </Typography>

            {/* Mobile Logo */}
            <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "#1e3a8a" }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "#1e3a8a",
                textDecoration: "none",
              }}
            >
              SmartCoaching
            </Typography>

            {/* --- DESKTOP NAVIGATION --- */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: 'center' }}>
              
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  sx={{
                    color: "#334155",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    mx: 1,
                    position: "relative",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e3a8a",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: "5px",
                      left: "0",
                      backgroundColor: "#facc15", // Gold underline
                      transition: "width 0.3s ease-in-out",
                    },
                  }}
                >
                  {link.title}
                </Button>
              ))}

              {/* Courses Dropdown Trigger */}
              <Button
                endIcon={<ArrowDropDownIcon />}
                onClick={handleMenuOpen}
                sx={{
                  color: "#334155",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  mx: 1,
                  "&:hover": { color: "#1e3a8a", bgcolor: 'transparent' },
                }}
              >
                Courses
              </Button>

              {/* Login Button */}
              <Button
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{
                  ml: 2,
                  bgcolor: "#1e3a8a",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  borderRadius: "50px", // Pill shape
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#172554",
                    boxShadow: "0 4px 12px rgba(30, 58, 138, 0.2)",
                  },
                }}
              >
                Student Portal
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, ml: 'auto' }}
            >
              <MenuIcon sx={{ color: '#1e3a8a' }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- DESKTOP COURSES MENU --- */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 220,
            borderRadius: 2,
            overflow: "visible",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography variant="overline" sx={{ px: 2, color: "#94a3b8", fontWeight: 700 }}>
          Academic Programs
        </Typography>
        <Divider sx={{ my: 1 }} />
        {["Class 6 Foundation", "Class 7 Foundation", "Class 8 Pre-Nurture", "Class 9 Boards", "Class 10 Boards"].map((item) => (
          <MenuItem key={item} onClick={handleMenuClose} sx={{ py: 1.5 }}>
            <Typography variant="body2" fontWeight={500}>
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* --- MOBILE DRAWER --- */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 280, p: 2 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
            <SchoolIcon sx={{ color: "#1e3a8a" }} />
            <Typography variant="h6" fontWeight={700} color="#1e3a8a">
                SmartCoaching
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.title} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={link.title} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            ))}

            {/* Mobile Collapsible Courses */}
            <ListItemButton onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}>
              <ListItemText primary="Courses" primaryTypographyProps={{ fontWeight: 500 }} />
              {mobileCoursesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={mobileCoursesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((cls) => (
                  <ListItemButton key={cls} sx={{ pl: 4 }} onClick={() => setMobileOpen(false)}>
                    <ListItemText primary={cls} secondary="Maths, Science" />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>

          <Box sx={{ mt: 4 }}>
             <Button
                fullWidth
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{
                  bgcolor: "#1e3a8a",
                  py: 1.5
                }}
              >
                Student Login
              </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}