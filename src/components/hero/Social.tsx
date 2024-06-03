import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";

const SocialData: { title: string; icon: string; link: string }[] = [
  {
    title: "Intagram",
    icon: "/icons/lucide/instagram.svg",
    link: "",
  },
  {
    title: "LinkedIn",
    icon: "/icons/lucide/linkedin.svg",
    link: "",
  },
  {
    title: "Twitter",
    icon: "/icons/lucide/twitter.svg",
    link: "",
  },
  {
    title: "Github",
    icon: "/icons/lucide/github.svg",
    link: "",
  },
];

export default function Social() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-12 left-10 grid gap-2">
        {SocialData.map((item, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link href={item.link}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    className="w-6 h-6"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" align="center">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
