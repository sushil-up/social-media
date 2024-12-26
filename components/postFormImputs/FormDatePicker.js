import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


const FormDatePicker = ({
  name,
  errors,
  control,
  required,
  type,
  className,
  defaultValue,
}) => {
  return (
    <FormControl fullWidth error={!!errors?.[name]?.message}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || null}
          render={({ field }) => (
            <TextField
              {...field}
              className={className}
              fullWidth
              type={type}
              required={required}
              error={!!errors?.[name]}
              helperText={errors?.[name]?.message || ""}
              variant="outlined"
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default FormDatePicker;
