import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

function HeaderLink(props: { href: string; children: JSX.Element | string }) {
  const router = useRouter();

  const isActive = router.pathname.startsWith(props.href);
  const sx = isActive
    ? { fontWeight: "bold", textDecoration: "underline 2px" }
    : {};

  return (
    <Link href={props.href}>
      <Button color="inherit">
        <Typography sx={sx}>{props.children}</Typography>
      </Button>
    </Link>
  );
}

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

          <HeaderLink href="/start">Get Started</HeaderLink>
          <HeaderLink href="/faq">FAQ</HeaderLink>

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
