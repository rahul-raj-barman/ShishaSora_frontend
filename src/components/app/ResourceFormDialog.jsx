import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

function sanitizePayload(values, fields) {
  return fields.reduce((acc, field) => {
    const value = values[field.name];

    if (value === "" || value === null || value === undefined) {
      return acc;
    }

    if (field.type === "number") {
      acc[field.name] = Number(value);
      return acc;
    }

    acc[field.name] = value;
    return acc;
  }, {});
}

export default function ResourceFormDialog({
  open,
  onClose,
  onSubmit,
  config,
  lookups,
  loading,
}) {
  const initialState = useMemo(
    () =>
      config.fields.reduce((acc, field) => {
        acc[field.name] = field.defaultValue ?? "";
        return acc;
      }, {}),
    [config.fields]
  );

  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (open) {
      setValues(initialState);
    }
  }, [initialState, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{config.createLabel}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {config.fields.map((field) => {
            const options =
              field.options ||
              (field.lookupKey ? lookups[field.lookupKey] || [] : []);

            if (field.type === "select") {
              return (
                <TextField
                  key={field.name}
                  select
                  label={field.label}
                  value={values[field.name]}
                  required={field.required}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [field.name]: event.target.value,
                    }))
                  }
                >
                  {!field.required && <MenuItem value="">None</MenuItem>}
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }

            if (field.type === "textarea") {
              return (
                <TextField
                  key={field.name}
                  label={field.label}
                  multiline
                  minRows={3}
                  value={values[field.name]}
                  required={field.required}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [field.name]: event.target.value,
                    }))
                  }
                />
              );
            }

            return (
              <TextField
                key={field.name}
                label={field.label}
                type={field.type || "text"}
                value={values[field.name]}
                required={field.required}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    [field.name]: event.target.value,
                  }))
                }
              />
            );
          })}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Box sx={{ flex: 1 }} />
        <Button
          variant="contained"
          onClick={() => onSubmit(sanitizePayload(values, config.fields))}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
