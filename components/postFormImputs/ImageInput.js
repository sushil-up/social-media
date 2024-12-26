import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function ImageInput({
  control,
  label,
  name,
  type,
  errors,
  onChange,
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          onChange={(e) => {
            onChange(e); // Handle custom onChange for file input
            field.onChange(e); // Ensure React Hook Form's field value is updated
          }}
          inputProps={{ accept: "image/*" }}
          label={label}
          variant="outlined"
          error={!!errors?.image}
          helperText={errors?.image?.message}
        />
      )}
    />
  );
}
