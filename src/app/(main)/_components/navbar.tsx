import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { CustomButton } from "@/components/ui/custom-button";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-x-4">
        <Image src="/logo.svg" alt="logo" height={28} width={28} />
        <Separator
          orientation="vertical"
          className="h-5 rotate-12 bg-zinc-900"
        />
        <p className="text-2xl">lomail</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <CustomButton className="rounded-full">
          <Link href="/dashboard">Dashboard</Link>
        </CustomButton>
        <Button className="rounded-full" variant="ghost" asChild>
          <Link href="https://github.com/ujjwal-sharma221/lomail">
            <Github />
          </Link>
        </Button>
      </div>
    </div>
  );
}
