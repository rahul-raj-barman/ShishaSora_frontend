import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: "70vh",
        background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        px: { xs: 3, md: 6 },
        color: "white",
      }}
    >
      <Typography 
        variant="h3" 
        fontWeight="bold"
        sx={{ maxWidth: "600px", lineHeight: 1.2 }}
      >
        ShikshaSora
      </Typography>

      <Typography 
        variant="h6" 
        sx={{ mt: 2, maxWidth: "520px", opacity: 0.9 }}
      >
        Trusted coaching for academic excellence, online learning support,
        and proven results that help students achieve their goals.
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          px: 4,
          py: 1.3,
          backgroundColor: "#facc15",
          color: "black",
          fontWeight: "600",
          "&:hover": { backgroundColor: "#eab308" }
        }}
      >
        Explore Courses
      </Button>
    </Box>
  );
}
