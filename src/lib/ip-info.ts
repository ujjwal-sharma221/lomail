import { IPinfoWrapper } from "node-ipinfo";

export const ipinfoWrapper = new IPinfoWrapper(process.env.IP_INFO_WRAPPER!);
