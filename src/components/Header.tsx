import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Button color="inherit">
              <Typography color="inherit" variant="h6" sx={{ flexGrow: 1 }}>
                Bancuh DNS
              </Typography>
            </Button>
          </Link>

          <Box sx={{ flex: 1 }} />

          <Link href="/get-started">
            <Button color="inherit">Get Started</Button>
          </Link>

          <Link href="https://github.com/ragibkl/adblock-dns-server">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
