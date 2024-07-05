"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hook/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full overflow-hidden grid xl:flex">
      <h1 className="text-base font-bold text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-normal lg:text-lg">{description}</h1>
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <section className="flex size-full flex-col gap-10 dark:text-white p-6">
      <h1 className="text-xl font-bold lg:text-3xl">Personal Meeting Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.fullName}'s Meeting Room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-blue-600 hover:bg-blue-600/80 text-white"
          onClick={startRoom}
        >
          Start Meeting
        </Button>
        <Button
          className="bg-dark1 hover:bg-dark1/80 text-white flex gap-2 items-center"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          <Image
            src="/icons/copy.svg"
            alt="copy"
            width={20}
            height={20}
            className="size-6"
          />
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
