"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

type HomeCardProps = {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
};

export default function HomeMeetingCard({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "w-full h-60 flex flex-col justify-between bg-orange-600 rounded-2xl p-4",
        className
      )}
      onClick={handleClick}
    >
      <div className="w-16 grid place-content-center bg-white/10 rounded-md p-2">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className="size-8"
        />
      </div>
      <div className="grid">
        <span className="text-3xl font-bold">{title}</span>
        <span className="text-base font-medium">{description}</span>
      </div>
    </div>
  );
}
