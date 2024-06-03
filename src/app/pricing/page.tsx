/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import data from "@/json/pricing.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  price: string;
  features: string[];
  onClick?: () => void;
};

const PricingPage: {
  title: string;
  description: string;
  buttonText: string;
  price: string;
  features: string[];
}[] = data.pricing;

export default function page() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center gap-12">
      <div className="absolute inset-0 m-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            router.push("/");
          }}
        >
          Back
        </Button>
      </div>
      {PricingPage.map((item: Props, index: any) => (
        <PricingCard
          key={index}
          title={item.title}
          buttonText={item.buttonText}
          description={item.description}
          price={item.price}
          features={item.features}
          onClick={() => console.log("clicked")}
        />
      ))}
    </div>
  );
}

function PricingCard({
  title,
  description,
  price,
  features,
  buttonText,
  onClick,
}: Props) {
  return (
    <div
      className={cn(
        "w-80 h-[28rem] p-6 rounded-2xl bg-slate-950 border border-slate-200",
        title === "Pro" ? "scale-110" : "scale-100"
      )}
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-base font-normal">{description}</p>
        <h1 className="text-3xl font-bold">{price}</h1>
      </div>
      <Button className="w-full mt-4" onClick={onClick}>
        {buttonText}
      </Button>
      <ul className="space-y-4 mt-6">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
