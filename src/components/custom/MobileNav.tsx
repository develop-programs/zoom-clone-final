"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SideNav from "./SideNav";
import { NavData } from "@/json/NavData";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 space-y-4">
        <Logo />
        <SheetClose asChild>
          <div>
            {NavData.map((item: any, index: any) => (
              <SheetClose key={index} asChild>
                <Link
                  href={`/Dashboard${item.link}`}
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
              </SheetClose>
            ))}
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
