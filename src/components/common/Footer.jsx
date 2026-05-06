import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const linkStyle = {
    color: "#b0c4de", // Light blue-grey for text
    textDecoration: "none",
    display: "block",
    mb: 1.5,
    transition: "color 0.3s",
    "&:hover": {
      color: "#ffffff", // White on hover
      textDecoration: "underline",
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#0f172a", // Dark Slate/Navy background
        color: "white",
        pt: 8,
        pb: 4,
        mt: 'auto', // Keeps footer at bottom if content is short
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Column 1: Brand & About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#facc15' }}>
              SikshaSora
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 3, lineHeight: 1.8 }}>
              Empowering the next generation of learners with world-class faculty,
              interactive online classes, and a curriculum designed for success.
            </Typography>
            
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: '#1877F2' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: '#E4405F' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: '#FF0000' } }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: '#0077b5' } }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Link href="#" sx={linkStyle}>About Us</Link>
            <Link href="#" sx={linkStyle}>Our Faculty</Link>
            <Link href="#" sx={linkStyle}>Success Stories</Link>
            <Link href="#" sx={linkStyle}>Admissions</Link>
            <Link href="#" sx={linkStyle}>Contact</Link>
          </Grid>

          {/* Column 3: Popular Courses */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
              Courses
            </Typography>
            <Link href="#" sx={linkStyle}>Class 10 (Board)</Link>
            <Link href="#" sx={linkStyle}>Class 9 Foundation</Link>
            <Link href="#" sx={linkStyle}>IIT-JEE Starter</Link>
            <Link href="#" sx={linkStyle}>NEET Prep</Link>
            <Link href="#" sx={linkStyle}>English Spoken</Link>
          </Grid>

          {/* Column 4: Newsletter & Contact */}
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 2 }}>
              Subscribe to get exam tips and latest updates.
            </Typography>
            
            {/* Newsletter Input */}
            <Box component="form" sx={{ display: 'flex', gap: 1, mb: 4 }}>
                <TextField 
                    variant="outlined" 
                    placeholder="Your Email" 
                    size="small" 
                    fullWidth
                    sx={{ 
                        bgcolor: 'rgba(255,255,255,0.1)', 
                        borderRadius: 1,
                        input: { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'transparent' },
                            '&:hover fieldset': { borderColor: '#facc15' },
                            '&.Mui-focused fieldset': { borderColor: '#facc15' },
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    sx={{ bgcolor: '#facc15', color: 'black', minWidth: '50px', '&:hover': { bgcolor: '#eab308' } }}
                >
                    <SendIcon />
                </Button>
            </Box>

            <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', color: '#94a3b8' }}>
                    <PhoneIcon fontSize="small" sx={{ color: '#facc15' }}/> 
                    <Typography variant="body2">+91 98765 43210</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', color: '#94a3b8' }}>
                    <EmailIcon fontSize="small" sx={{ color: '#facc15' }}/> 
                    <Typography variant="body2">admissions@sikshasora.in</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', color: '#94a3b8' }}>
                    <LocationOnIcon fontSize="small" sx={{ color: '#facc15', mt: 0.5 }}/> 
                    <Typography variant="body2">
                        2nd Floor, Industry House,<br/>
                        Tech City Road, Guwahati
                    </Typography>
                </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
                © 2025 Sikshasora Academy. All rights reserved.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" underline="hover" sx={{ color: '#64748b', fontSize: '0.875rem' }}>Privacy Policy</Link>
                <Link href="#" underline="hover" sx={{ color: '#64748b', fontSize: '0.875rem' }}>Terms of Service</Link>
                <Link href="#" underline="hover" sx={{ color: '#64748b', fontSize: '0.875rem' }}>Cookies</Link>
            </Box>
        </Box>
      </Container>
    </Box>
  );
}