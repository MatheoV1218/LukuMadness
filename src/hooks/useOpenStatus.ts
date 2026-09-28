import { useEffect, useState } from "react";
import { HOURS, formatTime } from "../data/site";

export type OpenStatus = {
  isOpen: boolean;
  label: string;
  /** JS day index (0 = Sunday) in the café's timezone */
  today: number;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const computeStatus = (): OpenStatus => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  const today = WEEKDAYS.indexOf(get("weekday"));
  const now = Number(get("hour")) * 60 + Number(get("minute"));
  const rowFor = (day: number) => HOURS.find((row) => row.days.includes(day));
  const todayRow = rowFor(today);

  if (todayRow) {
    const opens = toMinutes(todayRow.opens);
    const closes = toMinutes(todayRow.closes);
    if (now >= opens && now < closes) {
      return { isOpen: true, label: `Open now · until ${formatTime(todayRow.closes)}`, today };
    }
    if (now < opens) {
      return { isOpen: false, label: `Closed · opens ${formatTime(todayRow.opens)}`, today };
    }
  }
  const tomorrowRow = rowFor((today + 1) % 7);
  return {
    isOpen: false,
    label: tomorrowRow ? `Closed · opens tomorrow ${formatTime(tomorrowRow.opens)}` : "Closed",
    today,
  };
};

/** Client-only (returns null during prerender/hydration so markup matches). */
export const useOpenStatus = () => {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
};
