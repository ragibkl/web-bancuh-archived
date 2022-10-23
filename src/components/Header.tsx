import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const selectedStart = router.pathname === "/start";

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

          <Link href="/start">
            <Button color="inherit">
              <Typography
                sx={
                  selectedStart
                    ? { fontWeight: "bold", textDecoration: "underline 2px" }
                    : {}
                }
              >
                Get Started
              </Typography>
            </Button>
          </Link>

          <Box sx={{ flex: 1 }} />

          <Link href="https://github.com/ragibkl/adblock-dns-server">
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
