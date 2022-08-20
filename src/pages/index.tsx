import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import MapChart from "../components/MapChart";

function FeatGridCard(props: { title: string; children: string }) {
  const { title, children } = props;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ height: "100%" }}>
        <CardHeader title={title} />
        <CardContent>{children}</CardContent>
      </Card>
    </Grid>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bancuh DNS</title>
        <meta name="description" content="Free Adblock DNS" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container maxWidth="lg">
        <Header />
        <Paper
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginY: 2,
            paddingX: 2,
            paddingY: 6,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Free Adblock DNS
          </Typography>

          <Typography variant="overline" gutterBottom sx={{ fontSize: 20 }}>
            Block ads on your entire wifi, laptop, PC, tablets and phones.
          </Typography>
        </Paper>

        <Grid container spacing={2}>
          <FeatGridCard title="Family-Safe and Ad-free browsing">
            Blocks intrusive ads, tracking services, and malware sites. Blocks
            sites with adult contents. Keep your family browsing experience
            safe.
          </FeatGridCard>

          <FeatGridCard title="Zero Cost & Completely FREE">
            This service will remain free for as long as possible. We run and
            maintain the servers out-of-pocket, so you don't have to shell out a
            single penny!
          </FeatGridCard>

          <FeatGridCard title="Minimal Setup">
            Zero installation. Point your network to our DNS servers, and you
            are done. Visit the Quick Start link to set up Adblock DNS on your
            network.
          </FeatGridCard>

          <FeatGridCard title="Better performance & easy on your cpu">
            Blocking ads removes the unwanted Internet traffic from your
            network. Blocking ads also reduces the processing load on your
            computer. With Adblocking done at the DNS level, there is no
            performance impact on your device. No browser extensions or plugins
            need to run on your computer.
          </FeatGridCard>

          <FeatGridCard title="Always updated">
            We keep our servers updated, so you can keep browsing worry-free. We
            also leverage public adblock lists maintained by the wide adblocking
            community, and our servers refresh constantly as the upstream lists
            update.
          </FeatGridCard>

          <FeatGridCard title="Open Source FTW!!">
            Bancuh DNS is powered by open sourced tools and software. All the
            custom codes, scripts, and adblock list sources that we use are
            available publicly on GitHub. We continue to enhance and improve the
            project based on community feedback, and all work is done in the
            open.
          </FeatGridCard>
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ marginTop: 5 }}>
          Our Servers
        </Typography>

        <Typography variant="body1" gutterBottom>
          We have servers located in around the world. Find the closest one to
          you!
        </Typography>

        <Paper
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginY: 2,
          }}
        >
          <MapChart />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
