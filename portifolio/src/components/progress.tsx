import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Progress() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={24} sx={{ color: "#e4e4e7" }} />
    </Box>
  );
}
