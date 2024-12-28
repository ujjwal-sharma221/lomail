import { ipinfoWrapper } from "@/lib/ip-info";
import { extractIP } from "@/lib/utils";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const headerList = await headers();
  const ip = headerList.get("x-client-ip") || "IP not detected";

  const extractedIp = extractIP(ip);

  // Detect if the IP is a local/loopback address (127.0.0.1 or ::1)
  const isLocalIp = extractedIp === "127.0.0.1" || extractedIp === "::1";

  // Lookup IP info
  const ipInfo = await ipinfoWrapper.lookupIp(extractedIp);

  // If it's a bogon IP, or if it's a local IP, show a different message
  if (ipInfo.bogon || isLocalIp) {
    return (
      <div>
        Dashboard:{" "}
        {isLocalIp
          ? "You are accessing from a local/loopback IP address."
          : "This IP is a bogon (invalid or reserved)."}
      </div>
    );
  }

  // Display detailed IP information if valid
  const { ip: ipAddress, city, region, country } = ipInfo;
  return (
    <div>
      Dashboard: IP Address: {ipAddress}, Location: {city}, {region}, {country}
    </div>
  );
};

export default DashboardPage;
