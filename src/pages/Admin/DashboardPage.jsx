import { Alert, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import MetricCard from "../../components/app/MetricCard";
import { apiRequest } from "../../lib/api";

export default function DashboardPage() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSummary() {
      try {
        const response = await apiRequest("/reports/dashboard-summary");
        setSummary(response.data);
      } catch (loadError) {
        setError(loadError.message);
      }
    }

    loadSummary();
  }, []);

  return (
    <Stack spacing={3}>
      <BoxHeader
        title="Operations overview"
        subtitle="A live snapshot of admissions, academics, and collections."
      />

      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={2}>
        {[
          ["Students", summary?.students ?? "—", "Current active records"],
          ["Branches", summary?.branches ?? "—", "Operational centers"],
          ["Courses", summary?.courses ?? "—", "Live programs"],
          ["Batches", summary?.batches ?? "—", "Running and planned groups"],
          ["Enquiries", summary?.enquiries ?? "—", "Lead pipeline total"],
          ["New Today", summary?.newEnquiriesToday ?? "—", "Fresh incoming leads"],
          ["Fees Assigned", summary?.feesAssigned ?? "—", "Total tuition billed"],
          ["Outstanding", summary?.outstandingFees ?? "—", "Pending collections"],
        ].map(([label, value, hint]) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={label}>
            <MetricCard label={label} value={value} hint={hint} />
          </Grid>
        ))}
      </Grid>

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
            What this dashboard already supports
          </Typography>
          <Typography color="text.secondary">
            Owner registration, login, users, branches, courses, batches,
            students, enquiries, attendance, fees, payments, and institute-level
            summary metrics are all wired to the backend APIs.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

function BoxHeader({ title, subtitle }) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h4" fontWeight={800}>
        {title}
      </Typography>
      <Typography color="text.secondary">{subtitle}</Typography>
    </Stack>
  );
}
