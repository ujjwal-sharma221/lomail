import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractIP(ip: string) {
  if (ip.startsWith("::ffff:")) {
    return ip.replace("::ffff:", "");
  }

  if (ip.includes(":")) {
    return ip;
  }

  return ip;
}
