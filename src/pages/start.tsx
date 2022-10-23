import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Header from "../components/Header";
import { servers } from "../services/servers";

const locations = ["Singapore", "France", "Tokyo"];

const GetStarted: NextPage = () => {
  const [location, setLocation] = useState<string>(locations[0]);
  const [value, setTab] = useState<string>("1");
  const locationServers = servers.filter((s) => s.location === location);

  return (
    <>
      <Head>
        <title>Bancuh DNS: Getting Started</title>
        <meta name="description" content="Free Adblock DNS" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container maxWidth="lg">
        <Header />

        <Paper
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            marginY: 2,
            padding: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Getting Started
          </Typography>

          <Typography variant="h5" gutterBottom>
            Step 1: Find the servers closest to your location.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Please select a server location closest to you.
          </Typography>

          <FormControl variant="outlined" sx={{ minWidth: 220 }}>
            <InputLabel>Server Location</InputLabel>

            <Select
              value={location}
              label="Location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              {locations.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="body1" gutterBottom>
            Servers in this location:
          </Typography>

          {locationServers.map((s) => (
            <Card key={s.shortName} sx={{ marginY: 1 }}>
              <CardHeader title={`${s.fullName} (${s.location})`} />
              <CardContent>
                <Typography display="block">DoT: {s.fullName}</Typography>
                <Typography display="block">
                  DoH: https://{s.fullName}/dns-query
                </Typography>
                <Typography display="block">Do53-ipv4: {s.ipv4}</Typography>
                <Typography display="block">Do53-ipv6: {s.ipv6}</Typography>
              </CardContent>
            </Card>
          ))}

          <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
            Step 2: Setup your device / network
          </Typography>

          <Typography variant="body1" gutterBottom>
            Depending on what device you try to configure, follow the
            instructions below.
          </Typography>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={(_e, v) => setTab(v)}
                aria-label="lab API tabs example"
              >
                <Tab label="WiFi Router" value="1" />
                <Tab label="Android" value="2" />
                <Tab label="Laptop/PC" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">Home WiFi router</TabPanel>

            <TabPanel value="2">
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Android
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Private DNS
              </Typography>

              <Typography variant="body1" gutterBottom>
                Android versions 9 and above has a nifty feature called Private
                DNS.
              </Typography>

              <Typography variant="body1" gutterBottom>
                By default, when your Android device connects to the Internet
                via WiFi, it will use the default DNS servers assigned via the
                WiFi DHCP service. When on mobile data, it will be set by your
                ISP.
              </Typography>

              <Typography variant="body1" gutterBottom>
                With Private DNS, your Android device can connect to a different
                DNS server that you specify, ignoring the network DNS config.
                However, instead of using the normal DNS protocol via udp/tcp
                over port 53, Private DNS uses a different DNS-over-TLS (DoT)
                protocol instead. This means that the DNS queries are encrypted.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Setup Bancuh DNS via Android Private DNS (DNS-over-TLS)
              </Typography>

              <Typography variant="body1" gutterBottom>
                Since our Bancuh DNS already supports DoT protocol, setting this
                up on Android is easy.
              </Typography>

              <Typography variant="body1" gutterBottom>
                <ol>
                  <li>On your Android device, open the Settings app.</li>
                  <li>Navigate to Connection and Sharing - Private DNS.</li>
                  <li>
                    Set the Private DNS value to a custom value. Feel free to
                    use any of the following values:
                    <ul>
                      {locationServers.map((s) => (
                        <li key={s.fullName}>{s.fullName}</li>
                      ))}
                    </ul>
                  </li>
                </ol>
              </Typography>
            </TabPanel>

            <TabPanel value="3">Laptop/PC</TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </>
  );
};

export default GetStarted;
