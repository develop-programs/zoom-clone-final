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
    <div className="relative h-screen flex items-center justify-center gap-12">
      <div className="fixed inset-0  w-full h-14  flex items-center px-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            router.push("/");
          }}
          className="flex gap-2 items-center"
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-72 md:mt-44 lg:mt-0 p-6">
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
    <div className="w-full lg:w-[18rem] xl:w-[25rem] grid grid-cols-2 lg:grid-cols-1 mt-12 border-2 border-black gap-12 px-6 py-10 rounded-lg">
      <div className="grid gap-3">
        <span className="text-2xl font-bold">{title}</span>
        <h1 className="text-4xl font-bold">{price}</h1>
        <p>{description}</p>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
      <ul className="space-y-4">
        {features.map((item: string, index: any) => (
          <li key={index} className="text-base font-semibold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
