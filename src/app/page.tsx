import GettingStarted from "@/components/hero/GettingStarted";
import Information from "@/components/hero/Information";
import Navigation from "@/components/hero/Navigation";
import Social from "@/components/hero/Social";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="h-screen">
      <Navigation />
      <div className="container max-w-[90%] grid place-content-center">
        <div className="space-x-2 flex items-center justify-center p-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="size-6"
          />
          <span className="text-lg font-black">Yoom</span>
        </div>
        <div className="grid text-center gap-4">
          <span className="text-sm min-[425px]:text-xl xl:text-5xl font-bold flex items-start gap-2">
            FOR
            {["MEETING", "GATHERING", "CHILLING"].map((word) => (
              <p className="first-letter:text-blue-500" key={word}>
                {word}
              </p>
            ))}
          </span>
          <span className="text-3xl xl:text-5xl font-bold">JUST YOOM</span>
        </div>
        <div className="grid place-content-center mt-16 gap-12">
          <div className="flex justify-center">
            <div className="flex items-center rotate-90">
              <div className="size-4 rounded-full bg-blue-600 grid place-content-center animate-pulse duration-1000">
                <div className="size-2 rounded-full bg-white"></div>
              </div>
              <div className="border-dashed h-1 w-24 xl:w-32 border-2 border-white"></div>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/images/gettyimage.png"
              alt="main_icon"
              width={300}
              height={300}
              className="w-96"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <GettingStarted />
        </div>
      </div>
      <Information />
      <div className="absolute top-52 xl:top-32 right-12 md:right-24">
        <Image
          src="/images/layer-01.png"
          alt="layer"
          width={500}
          height={500}
          className="size-12 sm:size-24 md:size-32 xl:size-44"
        />
      </div>
      <div className="hidden fixed top-0 py-80 -left-28 -rotate-90 md:flex flex-col">
        <div>
          <span className="text-lg font-semibold">
            IT&apos;S NOT JUST A MEETING, it&apos;s yooming
          </span>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-screen hidden xl:grid container -z-20 place-content-center">
        <div className="flex xl:gap-60 h-80 text-sm px-12">
          <div className="flex-1">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              illum dolore, aut tempora nam similique consequatur ducimus nulla
              facere omnis ullam enim. Qui ratione cupiditate quia? Odio
              delectus quo exercitationem atque cum sapiente perspiciatis
              deserunt necessitatibus eveniet! Sunt laboriosam enim, atque magni
              in, pariatur numquam voluptatem nam, consectetur quis dicta?
            </span>
          </div>
          <div className="flex-1 xl:mt-24">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              illum dolore, aut tempora nam similique consequatur ducimus nulla
              facere omnis ullam enim. Qui ratione cupiditate quia? Odio
              delectus quo exercitationem atque cum sapiente perspiciatis
              deserunt necessitatibus eveniet! Sunt laboriosam enim, atque magni
              in, pariatur numquam voluptatem nam, consectetur quis dicta?
            </span>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}
