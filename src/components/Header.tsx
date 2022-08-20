import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Typography color="inherit" variant="h6" sx={{ flexGrow: 1 }}>
              Bancuh DNS
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
