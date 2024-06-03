"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex max-w-full flex-col gap-8 justify-between rounded-xl bg-dark1 px-5 py-8">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className="w-full flex justify-between">
        <div className="flex -space-x-4">
          {[
            "/images/avatar-1.jpeg",
            "/images/avatar-2.jpeg",
            "/images/avatar-3.png",
            "/images/avatar-4.png",
            "/images/avatar-5.png",
          ].map((avatar, index) => (
            <div key={index}>
              <Image
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-slate-700"
              />
            </div>
          ))}
          <div className="size-10 rounded-full border-2 border-slate-700 bg-blue-950 grid place-content-center">
            <span className="text-base font-bold">+9</span>
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button
              onClick={handleClick}
              className="rounded bg-blue-600 hover:bg-blue-600/80 px-6 text-white"
            >
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-[#252A41] hover:bg-[#252A41]/80 px-6 text-white"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy invitation
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
