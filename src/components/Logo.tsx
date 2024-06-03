"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  fontSize?: string;
  gap?: string;
  className?: string;
};

export default function Logo({ className, fontSize, gap }: Props) {
  const router = useRouter();
  return (
    <div
      className={cn("flex items-center gap-1 cursor-pointer", className, gap)}
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="size-12"
      />
      <span className={cn("font-bold text-2xl", fontSize)}>Yoom</span>
    </div>
  );
}
