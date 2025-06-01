import { Box, CircularProgress } from "@mui/material";

export const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
