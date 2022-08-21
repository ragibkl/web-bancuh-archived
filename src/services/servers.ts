import DNS from "dns2";

const dns = new DNS();

async function getIPV4(name: string) {
  const { answers } = await dns.resolveA(name);
  return answers[0]?.address || "n/a";
}

async function getIPV6(name: string) {
  const { answers } = await dns.resolveAAAA(name);
  return answers[0]?.address || "n/a";
}

async function getServerDetails(data: { shortName: string; location: string }) {
  const fullName = `${data.shortName}.bancuh.com`;

  return {
    ...data,
    fullName,
    ipv4: await getIPV4(fullName),
    ipv6: await getIPV6(fullName),
  };
}

export type Server = {
  location: string;
  shortName: string;
  fullName: string;
  ipv4: string;
  ipv6: string;
};

let servers: Server[] | null = null;

export async function getServers(): Promise<Server[]> {
  if (servers) {
    return servers;
  }

  const serversList = [
    { shortName: "sg-dns1", location: "Singapore" },
    { shortName: "sg-dns2", location: "Singapore" },
    { shortName: "fr-dns1", location: "France" },
    { shortName: "fr-dns2", location: "France" },
    { shortName: "jp-dns1", location: "Tokyo" },
  ];

  servers = await Promise.all(serversList.map(getServerDetails));

  return servers;
}
