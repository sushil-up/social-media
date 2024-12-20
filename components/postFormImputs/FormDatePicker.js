import { FormControl, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

export default function FormDatePicker({
  value,
  name,
  control,
  label,
  errors,
  className,
}) {
  console.log("error: ", errors);
  return (
    <FormControl fullWidth error={!!errors?.[name]} className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          defaultValue={new Date()}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={label}
              value={field.value ? dayjs(field.value, "MM/DD/YYYY") : null}
              onChange={(date) => {
                field.onChange(date ? date.format("MM/DD/YYYY") : null);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors?.[name]}
                  helperText={errors?.[name]?.message}
                />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
