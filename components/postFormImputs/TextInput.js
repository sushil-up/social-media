import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function TextInput({
  name,
  errors,
  control,
  label,
  required,
  inputType,
  min,
  className,
  defaultValue,
  value,
}) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        value={value}
        max
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field }) => (
          <TextField
            {...field}
            className={className}
            fullWidth
            label={label}
            type={inputType}
            required={required}
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
            multiline
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
