// Single source of truth for business details — used by the UI, structured data, and prerendered meta.

export const SITE = {
  name: "LukuMadness USA",
  shortName: "LukuMadness",
  url: "https://www.lukumadnessusa.com",
  tagline: "Greek loukoumades, pastries & coffee",
  phone: "(914) 358-4552",
  phoneHref: "tel:+19143584552",
  email: "info@lukumadnessusa.com",
  address: {
    street: "850 N Broadway",
    city: "White Plains",
    region: "NY",
    country: "US",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=LukuMadness%2C+850+N+Broadway%2C+White+Plains%2C+NY",
  mapEmbedUrl:
    "https://www.google.com/maps?q=LukuMadness%2C+850+N+Broadway%2C+White+Plains%2C+NY&output=embed",
  social: {
    facebook: "https://www.facebook.com/lukumadnessusa",
    instagram: "https://www.instagram.com/lukumadness.usa",
  },
  order: {
    uberEats:
      "https://www.ubereats.com/store/lukumadness/HIJenRrXUy-xp6baXpRTzA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjclMjBSb2JlcnRhJTIwUGwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIwZjcyMTQzOC0zZWM5LWJhYjEtYmM5OS0xZjVlM2ZmMGFhZTQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQxLjA1OTQwMjglMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNzY1NTkxJTdE",
    grubhub:
      "https://www.grubhub.com/restaurant/lukumadness-850-n-broadway-white-plains/10872048",
  },
  app: {
    ios: "https://apps.apple.com/app/id6795653647",
    android: "https://play.google.com/store/apps/details?id=com.lukumadnessusa.app",
  },
} as const;

export const fullAddress = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region}`;

export type HoursRow = {
  label: string;
  /** JS day indexes (0 = Sunday) */
  days: number[];
  schemaDays: string[];
  opens: string;
  closes: string;
};

export const HOURS: HoursRow[] = [
  {
    label: "Mon – Fri",
    days: [1, 2, 3, 4, 5],
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "20:00",
  },
  {
    label: "Sat – Sun",
    days: [0, 6],
    schemaDays: ["Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
];

/** "07:00" -> "7 AM", "20:30" -> "8:30 PM" */
export const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${suffix}` : `${hour} ${suffix}`;
};
