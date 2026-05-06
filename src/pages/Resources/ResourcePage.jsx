import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import ResourceFormDialog from "../../components/app/ResourceFormDialog";
import { apiRequest } from "../../lib/api";
import { toOptions, formatLabel, formatValue } from "../../utils/resourceHelpers";

const lookupMap = {
  branches: "/branches",
  courses: "/courses",
  batches: "/batches",
  students: "/students",
  users: "/users",
  fees: "/fees",
};

export default function ResourcePage({ config }) {
  const [rows, setRows] = useState([]);
  const [lookups, setLookups] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const requiredLookups = useMemo(
    () =>
      [...new Set(config.fields.map((field) => field.lookupKey).filter(Boolean))],
    [config.fields]
  );

  async function loadData() {
    setLoading(true);
    setError("");

    try {
      const [resourceResponse, ...lookupResponses] = await Promise.all([
        apiRequest(config.endpoint),
        ...requiredLookups.map((lookupKey) => apiRequest(lookupMap[lookupKey])),
      ]);

      setRows(resourceResponse.data.data || resourceResponse.data || []);

      const nextLookups = {};
      requiredLookups.forEach((lookupKey, index) => {
        const lookupRows =
          lookupResponses[index].data.data || lookupResponses[index].data || [];
        nextLookups[lookupKey] = toOptions(lookupRows);
      });

      setLookups(nextLookups);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [config.endpoint]);

  async function handleCreate(payload) {
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response = await apiRequest(config.endpoint, {
        method: "POST",
        body: payload,
      });

      setMessage(response.message || `${config.label} saved`);
      setDialogOpen(false);
      await loadData();
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Stack spacing={3}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        <Box>
          <Typography variant="h4" fontWeight={800}>
            {config.label}
          </Typography>
          <Typography color="text.secondary">{config.description}</Typography>
        </Box>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>
          {config.createLabel}
        </Button>
      </Stack>

      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          {loading ? (
            <Stack alignItems="center" sx={{ py: 8 }}>
              <CircularProgress />
            </Stack>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  {config.columns.map((column) => (
                    <TableCell key={column}>{formatLabel(column)}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row._id} hover>
                    {config.columns.map((column) => (
                      <TableCell key={column}>
                        {typeof row[column] === "boolean" ? (
                          <Chip
                            label={row[column] ? "Yes" : "No"}
                            size="small"
                            color={row[column] ? "success" : "default"}
                          />
                        ) : (
                          formatValue(row, column)
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={config.columns.length}>
                      <Typography color="text.secondary">
                        No records yet.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <ResourceFormDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleCreate}
        config={config}
        lookups={lookups}
        loading={saving}
      />
    </Stack>
  );
}
