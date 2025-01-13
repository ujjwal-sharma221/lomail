import SparklesText from "@/components/ui/sparkles-text";
import { UserButton } from "@clerk/nextjs";

export function DashboardNavbar() {
  return (
    <nav className="flex items-center justify-between">
      <SparklesText text="Your Dashboard" className="text-xl md:text-4xl" />
      <UserButton />
    </nav>
  );
}
