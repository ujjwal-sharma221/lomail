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
