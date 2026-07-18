export type Courier = "th" | "flash" | "jt" | "kex" | "dhl";

export interface CourierInfo {
  id: Courier;
  name: string;
  image: string;
  placeholder: string;
  url: (tracking: string) => string;
}

export const couriers: CourierInfo[] = [
  {
    id: "th",
    name: "ไปรษณีย์ไทย",
    image: "/images/couriers/thailandpost.png",
    placeholder: "เช่น TH123456789TH",
    url: (tracking) =>
      `https://track.thailandpost.co.th/?trackNumber=${tracking}`,
  },

  {
    id: "flash",
    name: "Flash Express",
    image: "/images/couriers/flash.png",
    placeholder: "เช่น FX123456789",
    url: (tracking) =>
      `https://www.flashexpress.com/th/tracking?se=${tracking}`,
  },

  {
    id: "jt",
    name: "J&T Express",
    image: "/images/couriers/jt.png",
    placeholder: "เช่น JT123456789",
    url: (tracking) =>
      `https://www.jtexpress.co.th/index/query/gzquery.html?bills=${tracking}`,
  },

  {
    id: "kex",
    name: "KEX Express",
    image: "/images/couriers/kex.png",
    placeholder: "เช่น KEX123456789",
    url: (tracking) =>
      `https://th.kerryexpress.com/th/track/?track=${tracking}`,
  },

  {
    id: "dhl",
    name: "DHL",
    image: "/images/couriers/dhl.png",
    placeholder: "เช่น DHL123456789",
    url: (tracking) =>
      `https://www.dhl.com/th-th/home/tracking.html?tracking-id=${tracking}`,
  },
];