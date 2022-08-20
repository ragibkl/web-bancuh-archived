import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Button color="inherit" href="">
              <Typography color="inherit" variant="h6" sx={{ flexGrow: 1 }}>
                Bancuh DNS
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
