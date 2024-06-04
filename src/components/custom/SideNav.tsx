"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { NavData } from "@/json/NavData";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="h-screen bg-dark1 flex flex-col p-4">
      <Logo />
      <div className="flex-1 space-y-2 mt-6">
        {NavData.map((item: any, index: any) => (
          <Link
            href={`/Dashboard${item.link}`}
            key={index}
            className={cn(
              pathname.startsWith(`/Dashboard${item.link}`)
                ? "bg-blue-600"
                : "bg-transparent",
              "w-full flex justify-start items-center gap-4 p-4 rounded-md"
            )}
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={100}
              height={100}
              className="size-6"
            />
            <span className="text-base font-bold">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
