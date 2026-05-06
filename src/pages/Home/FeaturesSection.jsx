import { Box, Typography, Grid, Paper } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import InsightsIcon from "@mui/icons-material/Insights";
import SchoolIcon from "@mui/icons-material/School";

export default function FeaturesSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        fontWeight="700"
        textAlign="center"
        sx={{ mb: 4, color: "#1e3a8a" }}
      >
        Why Choose Our Coaching?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Feature 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <LiveTvIcon
              sx={{ fontSize: 45, color: "cyan", mb: 1 }}
            />
            <Typography variant="h6" fontWeight={600}>
              Online Classes
            </Typography>
            <Typography sx={{ mt: 1, opacity: 0.8 }}>
              Join live classes or learn via recorded lectures anytime.
            </Typography>
          </Paper>
        </Grid>

        {/* Feature 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <InsightsIcon
              sx={{ fontSize: 45, color: "green", mb: 1 }}
            />
            <Typography variant="h6" fontWeight={600}>
              Best Results
            </Typography>
            <Typography sx={{ mt: 1, opacity: 0.8 }}>
              Year after year, our students secure top ranks.
            </Typography>
          </Paper>
        </Grid>

        {/* Feature 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <SchoolIcon
              sx={{ fontSize: 45, color: "violet", mb: 1 }}
            />
            <Typography variant="h6" fontWeight={600}>
              Expert Teachers
            </Typography>
            <Typography sx={{ mt: 1, opacity: 0.8 }}>
              Highly qualified educators with years of teaching experience.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
