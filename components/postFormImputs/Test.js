import React from "react";
import { TextField } from "@mui/material";

const TestComponent = () => {
  return (
    <div>
      <TextField
        label="Test Field"
        error={true}
        helperText="This is a test error."
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default TestComponent;
