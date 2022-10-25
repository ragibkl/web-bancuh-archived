import { Container, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import { servers } from "../services/servers";

const FAQ: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bancuh DNS: FAQ</title>
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
            FAQ
          </Typography>
          <Typography variant="h6">How much does this cost?</Typography>
          <Typography variant="body1" gutterBottom>
            It&aposs free. I never intended to charge people for this anyway.
            <br />I might set up some ways for you to be able to donate to me to
            keep this running. I am open to suggestions.
          </Typography>
          <Typography variant="h6">
            What are the IP addresses of your DNS servers?
          </Typography>
          My servers:
          <ul>
            {servers.map((s) => (
              <li key={s.fullName}>
                <b>{s.shortName}</b>
                <br />
                DoT: {s.fullName}
                <br />
                DoH: https://{s.fullName}/dns-query
                <br />
                Do53-ipv4: {s.ipv4}
                <br />
                Do53-ipv6: {s.ipv6}
              </li>
            ))}
          </ul>
          <Typography variant="h6">How do I set it up?</Typography>
          <Typography variant="body1" gutterBottom>
            Follow the instructions on the{" "}
            <Link href="/start">Get Started</Link> page to get started.
          </Typography>
          <Typography variant="h6">Who should use this service?</Typography>
          <Typography variant="body1" gutterBottom>
            If you don&apost like to see ads while browsing, use this. Currently, we
            also filter out some known adult content sites, so if you apply this
            to your home router, we can make the internet a little safer for
            your kids.
          </Typography>
          <Typography variant="h6">What type of content is blocked?</Typography>
          <Typography variant="body1" gutterBottom>
            We try to block the following:
            <ul>
              <li>Known ad servers</li>
              <li>Known malware sites</li>
              <li>Known adult content sites</li>
            </ul>
          </Typography>
          <Typography variant="h6">How does DNS adblocking work?</Typography>
          <Typography variant="body1" gutterBottom>
            Whenever your browser or apps need to load content from the
            Internet, your device will first have to find out the IP address of
            the server with that content. It will first look in your system&aposs
            hosts file. Next, it will try your DNS servers. DNS servers then
            provides the IP address of the domain name that serves the content.
            Having the correct IP address of domain names is crucial for loading
            Internet content.
            <br />
            An adblock DNS server however, does something extra. If the domain
            name is known for hosting ads, we perform a &aposwhite lie&apos, and
            redirect to a null server. Not having the correct IP address for
            adservers means that ads will fail to load.
            <br />
            If you use any available adblock DNS server on your home router, or
            your laptop, ads won&apost load.
            <br />
          </Typography>
          <Typography variant="h6">
            Why not use a browser extension instead?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ideally, you should use browser adblock extensions whenever they are
            available. Also use adblock dns servers to cover other use cases.
            <br />
            The most common way to block ads, is to install a browser extension
            that block ads on the browser. If you use Firefox or Chrome on a
            laptop/PC, then there are several extensions to choose from. It is
            also quite effective.
            <br />
            However not all browsers and devices will have available extensions.
            Some mobile apps nowadays also have ads placeholder in-app, and
            extensions will not apply here.
            <br />
            Extensions also only apply to a single browser where it&aposs installed.
            You probably don&apost want to install adblock extensions on every
            single device on your home network. In comparison, adblock dns will
            apply to your entire network.
          </Typography>
          <Typography variant="h6">
            Why not edit the hosts file instead?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Actually, using hosts file would be slightly faster and more
            reliable than using our adblock DNS servers. When possible, you
            should use hosts file instead. Again, you can still use our adblock
            DNS servers to cover for other use cases. Here&aposs why.
            <br />
            Host files work offline, your device will immediately know which ad
            domains to block, without relying on external providers. You can
            then stick to Google&aposs DNS or OpenDNS servers for regular content,
            which should be more reliable and faster than my own servers.
            <br />
            There are also tools that can help you configure this. AdAway works
            on rooted Android devices. Some projects
            (https://github.com/StevenBlack/hosts) provide hosts files that you
            can use straight away.
            <br />
            But again, it does not work for all devices. I&aposm not sure if it is
            possible on IOS, and doing this on Android requires the device to be
            rooted. And you have to configure each single device on your
            network.
            <br />
            It is also possible that you are also using your hosts file for
            other purposes, and you don&apost want to pollute it with thousands of
            lines of ad domains. Also, a misconfigured host file will disrupt
            your Internet.
            <br />
            Use adblock DNS when you don&apost want to deal with hosts file. It&aposs
            easier.
            <br />
          </Typography>
          <Typography variant="h6">
            Is it possible to host adblock DNS servers myself?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Certainly. There are several guides on the Internet on how to set
            this up. This has been done before numerous times.
            <br />I recommend you get started with my project on github at
            https://github.com/ragibkl/adblock-dns-server. Using a few commands,
            you can get up and running within minutes.
          </Typography>
          <Typography variant="h6">
            It does not seem to work. How do I fix this?
          </Typography>
          <Typography variant="body1" gutterBottom>
            At the moment, we don&apost have a dedicated troubleshooting page or
            help page yet. Will add this soon.
            <br />
            For now, head over to the project issues page on GitHub at
            https://github.com/ragibkl/adblock-dns-server/issues
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default FAQ;
