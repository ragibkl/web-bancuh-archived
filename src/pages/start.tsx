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
import Image from "next/image";
import { useState } from "react";

import homeRouterImage from "../images/home_router.drawio.png";
import homeRouterLoginImage from "../images/home_router_login.png";
import homeRouterWanIPImage from "../images/home_router_wan_ip.png";
import homeRouterWanIP6Image from "../images/home_router_wan_ip6.png";
import win10AdapterListImage from "../images/windows_10_adapter_list.png";
import win10AdapterPropertiesImage from "../images/windows_10_adapter_properties.png";
import win10Ipv4Image from "../images/windows_10_ipv4.png";
import win10Ipv6Image from "../images/windows_10_ipv6.png";
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
              <TabList onChange={(_e, v) => setTab(v)} aria-label="tabs">
                <Tab label="WiFi Router" value="1" />
                <Tab label="Android" value="2" />
                <Tab label="Windows 10" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Home WiFi router
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Common WiFi DNS Setup
              </Typography>

              <Image src={homeRouterImage} />

              <Typography variant="body1" gutterBottom>
                The above image shows the typical setup of a home WiFi Network.
                Usually, there is a WiFi router that connects to the internet
                via some ISP provided connection. The WiFi router then gets
                automatically assigned an IP Address and a set of DNS servers to
                use <b>(WAN DNS)</b>. Usually, this is either Google&apos;s or
                your ISP&apos;s public DNS servers. Whenever the router needs to
                resolve a domain name into an ip address, it will use these DNS
                servers.
              </Typography>

              <Typography variant="body1" gutterBottom>
                All clients on the network connect to the WiFi router. Each
                client then gets assigned an IP address automatically via DHCP,
                and also a DNS server to use <b>(Client DNS)</b>. Usually, the
                DNS server here is the same as the router ip address. When the
                client needs to resolve a domain name into ip address, it will
                use the router DNS endpoint.
              </Typography>

              <Typography variant="body1">
                For this typical setup, DNS resolution usually works as follows:
              </Typography>

              <Typography variant="body1" component="div" gutterBottom>
                <ol>
                  <li>
                    Client device needs to resolve Domain Name to an ip address
                  </li>
                  <li>
                    Client device sends the DNS request to router{" "}
                    <b>(Client DNS)</b>
                  </li>
                  <li>
                    Router checks memory cache for the DNS answer, and returns
                    that if available
                  </li>
                  <li>
                    Otherwise, router sends DNS request upstream to Google or
                    ISP&apos;s DNS <b>(WAN DNS)</b>
                  </li>
                  <li>
                    DNS answer from upstream is cached in memory by the router,
                    and also returned to the client
                  </li>
                </ol>
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Setup Bancuh DNS via WiFi WAN DNS
              </Typography>

              <Typography variant="body1" gutterBottom>
                In order to setup Bancuh DNS on your WiFi, we only need to
                change the <b>WAN DNS</b> setting on the WiFi router to use{" "}
                <b>Bancuh DNS</b>. With this single change, all DNS requests
                from all clients in the network will be answered by{" "}
                <b>Bancuh DNS</b>. There should be no need to make any DNS
                changes to individual clients.
              </Typography>

              <Typography variant="body1" component="div">
                The steps can be something like this:
              </Typography>

              <Typography variant="body1" component="div" gutterBottom>
                <ol>
                  <li>
                    On your browser, enter the ip address of your router You
                    might have to enter your router admin credentials to proceed
                    <Box maxWidth={400}>
                      <Image
                        layout="responsive"
                        sizes="200px"
                        src={homeRouterLoginImage}
                      />
                    </Box>
                  </li>
                  <li>
                    Go to WAN settings page. Look for DNS settings.
                    <Box maxWidth={800}>
                      <Image src={homeRouterWanIPImage} />
                    </Box>
                  </li>
                  <li>
                    Update the <b>WAN DNS</b> values to use{" "}
                    <b>Bancuh DNS servers</b>. You can use the following values:
                    <ul>
                      {locationServers.map((s) => (
                        <li key={s.fullName}>
                          <b>{s.shortName}</b>
                          <br />
                          ipv4: {s.ipv4}
                          <br />
                          ipv6: {s.ipv6}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    It is also possible that your router have a separate page
                    for managing <b>ipv6 WAN DNS</b> addresses. If so,
                    you&apos;ll have to change these at the appropriate
                    locations.
                    <Box maxWidth={800}>
                      <Image src={homeRouterWanIP6Image} />
                    </Box>
                  </li>
                </ol>
              </Typography>
            </TabPanel>

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

              <Typography variant="body1" component="div" gutterBottom>
                <ol>
                  <li>On your Android device, open the Settings app.</li>
                  <li>Navigate to Connection and Sharing - Private DNS.</li>
                  <li>
                    Set the Private DNS value to a custom value. Feel free to
                    use any of the following values:
                    <ul>
                      {locationServers.map((s) => (
                        <li key={s.fullName}>
                          <b>{s.shortName}</b>
                          <br />
                          DoT: {s.fullName}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ol>
              </Typography>
            </TabPanel>

            <TabPanel value="3">
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Windows 10
              </Typography>

              <Typography variant="body1" gutterBottom>
                On Windows 10 laptops and PCs, the default DNS settings are
                usually set automatically by your network DHCP settings. This is
                usually the IP address of your WiFi router or another public DNS
                service. You can override these DNS settings to use Bancuh DNS
                instead by using the following steps.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Setup Bancuh DNS via Windows 10 Control Panel
              </Typography>

              <Typography variant="body1" gutterBottom>
                Open the <b>Control Panel</b> app. From there, go to{" "}
                <b>Network and Internet</b>, and then{" "}
                <b>Network and Sharing Center</b>. On the left tab, go to{" "}
                <b>Change adapter settings</b>. From there, you should see a
                list of your network devices, either WiFi or Ethernet.
              </Typography>

              <Box maxWidth={400}>
                <Image layout="responsive" src={win10AdapterListImage} />
              </Box>

              <Typography variant="body1" gutterBottom>
                Double click on the network that you want to change. Then, click
                on <b>Properties</b>. You should see a list of items for this
                network adapter.
              </Typography>

              <Box maxWidth={300}>
                <Image layout="responsive" src={win10AdapterPropertiesImage} />
              </Box>

              <Typography variant="body1" gutterBottom>
                On this screen, we are interested in 2 settings:
                <ul>
                  <li>
                    <b>Internet Protocol Version 4 (TCP/IPv4)</b>
                  </li>
                  <li>
                    <b>Internet Protocol Version 6 (TCP/IPv6)</b>
                  </li>
                </ul>
                Double-click on each of them and update them as follows:
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Internet Protocol Version 4 (TCP/IPv4)
              </Typography>

              <Box maxWidth={300}>
                <Image layout="responsive" src={win10Ipv4Image} />
              </Box>

              <Typography variant="body1" gutterBottom>
                <ul>
                  <li>
                    Click on the radio button{" "}
                    <b>Use the following DNS server addresses</b>.
                  </li>
                  <li>
                    Preferred DNS Server: <b>{locationServers[0].ipv4}</b>
                  </li>
                  <li>
                    Alternate DNS Server:{" "}
                    <b>
                      {locationServers[1] ? servers[1].ipv4 : "<leave_blank>"}
                    </b>
                  </li>
                </ul>
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                Internet Protocol Version 6 (TCP/IPv6)
              </Typography>

              <Box maxWidth={300}>
                <Image layout="responsive" src={win10Ipv6Image} />
              </Box>

              <Typography variant="body1" gutterBottom>
                <ul>
                  <li>
                    Click on the radio button{" "}
                    <b>Use the following DNS server addresses</b>.
                  </li>
                  <li>
                    Preferred DNS Server: <b>{locationServers[0].ipv6}</b>
                  </li>
                  <li>
                    Alternate DNS Server:{" "}
                    <b>
                      {locationServers[1] ? servers[1].ipv6 : "<leave_blank>"}
                    </b>
                  </li>
                </ul>
              </Typography>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </>
  );
};

export default GetStarted;
