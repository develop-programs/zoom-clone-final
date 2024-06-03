import Image from "next/image";
import React from "react";
const SampleData: { title: string; image: string; description: string }[] = [
  {
    title: "ONE ON ONE MEETING",
    image: "/images/gettyimages-001.png",
    description: "with  CHAT and  screen Sharing",
  },
  {
    title: "GROUP MEETING",
    image: "/images/gettyimages-002.png",
    description: "with  CHAT and  screen Sharing with end to end privacy",
  },
  {
    title: "FOR ALL TYPES OF DEVICES MOBILE",
    image: "/images/gettyimages-003.png",
    description: "LAPTOP, TABLET, ADD MORE ALL MODERN BROWSERS COMPATIBLE",
  },
];
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
