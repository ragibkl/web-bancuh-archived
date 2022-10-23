export type Server = {
  location: string;
  shortName: string;
  fullName: string;
  ipv4: string;
  ipv6: string;
};

export const servers: Server[] = [
  {
    shortName: "sg-dns1",
    location: "Singapore",
    fullName: "sg-dns1.bancuh.com",
    ipv4: "139.59.219.245",
    ipv6: "2400:6180:0:d0::f7:1001",
  },
  {
    shortName: "sg-dns2",
    location: "Singapore",
    fullName: "sg-dns2.bancuh.com",
    ipv4: "139.59.218.207",
    ipv6: "2400:6180:0:d0::f5:7001",
  },
  {
    shortName: "fr-dns1",
    location: "France",
    fullName: "fr-dns1.bancuh.com",
    ipv4: "51.158.99.7",
    ipv6: "2001:bc8:600:705::1",
  },
  {
    shortName: "fr-dns2",
    location: "France",
    fullName: "fr-dns2.bancuh.com",
    ipv4: "163.172.180.231",
    ipv6: "2001:bc8:608:2054::1",
  },
  {
    shortName: "jp-dns1",
    location: "Tokyo",
    fullName: "jp-dns1.bancuh.com",
    ipv4: "103.29.68.118",
    ipv6: "2400:8902::f03c:92ff:fe3e:46cd",
  },
];
