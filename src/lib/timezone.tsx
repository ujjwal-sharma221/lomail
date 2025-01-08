"use client";

import { useEffect, useState } from "react";

export function Timezone() {
  const [timezone, setTimezone] = useState("");
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);
  });

  return (
    <div>
      <h1>Your Timezone</h1>
      <p>{timezone || "Detecting timezone..."}</p>
    </div>
  );
}

interface calTimezoneInfoProps {
  timezone1: string;
  timezone2: string;
  eventHour: number;
}

interface calTimezoneInfoReturn {
  time1: string;
  time2: string;
  difference: string;
  timeUntilEvent: string;
}

export function calTimezoneInfo({
  timezone1,
  timezone2,
  eventHour,
}: calTimezoneInfoProps): calTimezoneInfoReturn {
  const now = new Date();
  const formatter1 = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone1,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formatter2 = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone2,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const time1 = formatter1.format(now);
  const time2 = formatter2.format(now);

  const offset1 = parseInt(
    now.toLocaleString("en-US", {
      timeZone: timezone1,
      hour: "numeric",
      hour12: false,
    }),
  );

  const offset2 = parseInt(
    now.toLocaleString("en-US", {
      timeZone: timezone2,
      hour: "numeric",
      hour12: false,
    }),
  );

  const hourDiff = (offset2 - offset1 + 24) % 24;
  const difference = `${hourDiff} hours`;

  const eventTime = new Date();
  eventTime.setHours(eventHour, 0, 0, 0);
  const eventInSecondTimezone = new Date(
    eventTime.toLocaleString("en-US", { timeZone: timezone2 }),
  );

  const timeUntil = eventInSecondTimezone.getTime() - now.getTime();

  let timeUntilEvent: string;

  if (timeUntil > 0) {
    const hours = Math.floor(timeUntil / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    timeUntilEvent = `${hours} hours and ${minutes} minutes`;
  } else {
    timeUntilEvent = "Event has already started";
  }

  return { time1, time2, difference, timeUntilEvent };
}
