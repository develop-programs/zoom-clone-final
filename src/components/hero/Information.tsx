import Image from "next/image";
import React from "react";
import { SampleData } from "@/json/information";

export default function Information() {
  return (
    <div className="fixed hidden xl:block bottom-12 left-52">
      {SampleData.map((item: any, index: any) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <div className="w-24">
              <center>
                <Image
                  src={item.image}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </center>
            </div>
            <div className="w-72 grid text-start">
              <span className="text-sm md:text-base font-semibold">
                {item.title}
              </span>
              <span className="text-xs md:text-sm lowercase font-light">
                {item.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
