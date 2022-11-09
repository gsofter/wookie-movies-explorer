// ** MUI Import
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CircularProgress disableShrink />
    </Box>
  );
};

export default Spinner;
