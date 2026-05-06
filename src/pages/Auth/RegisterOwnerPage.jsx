import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { apiRequest } from "../../lib/api";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  instituteName: "",
  instituteCode: "",
  instituteEmail: "",
  institutePhone: "",
};

export default function RegisterOwnerPage() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await apiRequest("/auth/register-owner", {
        method: "POST",
        body: form,
      });

      login(response.data);
      navigate("/dashboard");
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      className="auth-gradient"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 6, px: 2 }}
    >
      <Card sx={{ maxWidth: 900, width: "100%", mx: "auto", borderRadius: 5 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="overline" color="text.secondary">
            Get started
          </Typography>
          <Typography variant="h4" fontWeight={800}>
            Create your institute owner account
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            This bootstraps the first owner user and the main institute record.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {error && <Alert severity="error">{error}</Alert>}
              <Grid container spacing={2}>
                {[
                  ["fullName", "Owner name"],
                  ["email", "Owner email"],
                  ["phone", "Owner phone"],
                  ["password", "Password", "password"],
                  ["instituteName", "Institute name"],
                  ["instituteCode", "Institute code"],
                  ["instituteEmail", "Institute email"],
                  ["institutePhone", "Institute phone"],
                ].map(([key, label, type]) => (
                  <Grid size={{ xs: 12, md: 6 }} key={key}>
                    <TextField
                      fullWidth
                      label={label}
                      type={type || "text"}
                      value={form[key]}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          [key]: event.target.value,
                        }))
                      }
                      required={["fullName", "email", "phone", "password", "instituteName", "instituteCode"].includes(key)}
                    />
                  </Grid>
                ))}
              </Grid>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <Button variant="contained" type="submit" size="large" disabled={loading}>
                  {loading ? "Creating..." : "Create account"}
                </Button>
                <Button component={RouterLink} to="/login" size="large">
                  Already have an account? Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
