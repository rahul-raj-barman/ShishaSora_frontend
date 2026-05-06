import { Card, CardContent, Typography } from "@mui/material";

export default function MetricCard({ label, value, hint }) {
  return (
    <Card
      className="metric-card"
      sx={{
        borderRadius: 4,
        minHeight: 150,
        border: "1px solid rgba(18,48,59,0.08)",
        boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {label}
        </Typography>
        <Typography variant="h3" fontWeight={800} sx={{ color: "#0f766e" }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, maxWidth: 180 }}>
          {hint}
        </Typography>
      </CardContent>
    </Card>
  );
}
