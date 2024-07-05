"use client";

import { Call, CallRecording } from "@stream-io/video-react-sdk";

import { useGetCalls } from "@/hook/useGetCalls";
import MeetingCard from "./Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function CustomCards({
  type,
}: {
  type: "ended" | "upcoming" | "recordings";
}) {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const [filter, setFilter] = useState<"all" | "today" | "custom">();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        callRecordings?.map((meeting) => meeting.queryRecordings()) ?? []
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading) return null;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {type == "ended" ? "Preview" : type}
          </h1>
        </div>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-32 flex justify-start items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M3 6h18" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilter("all")}>
                All
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("today")}>
                Today
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("custom")}>
                Custom
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 pb-12 xl:grid-cols-2 h-[calc(100vh-5rem)] overflow-y-auto">
        {calls && calls.length > 0 ? (
          calls
            .filter((meeting: Call | CallRecording) => {
              if (filter === "today") {
                return (
                  moment((meeting as Call).state?.startsAt).format(
                    "YYYY-MM-DD"
                  ) === moment().format("YYYY-MM-DD")
                );
              } else if (filter === "custom") {
                return (
                  moment((meeting as Call).state?.startsAt).format(
                    "YYYY-MM-DD"
                  ) === moment().subtract(1, "days").format("YYYY-MM-DD")
                );
              } else {
                return true;
              }
            })
            .reverse()
            .map((meeting: Call | CallRecording) => (
              <MeetingCard
                key={(meeting as Call).id}
                icon={
                  type === "ended"
                    ? "/icons/preview.svg"
                    : type === "upcoming"
                    ? "/icons/upcomming.svg"
                    : "/icons/camera.svg"
                }
                title={
                  (meeting as Call).state?.custom?.description ||
                  (meeting as CallRecording).filename?.substring(0, 20) ||
                  "No Description"
                }
                date={
                  moment((meeting as Call).state?.startsAt).format(
                    "DD-MM-YYYY hh:mm A"
                  ) || (meeting as CallRecording).start_time?.toLocaleString()
                }
                isPreviousMeeting={type === "ended"}
                link={
                  type === "recordings"
                    ? (meeting as CallRecording).url
                    : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                        (meeting as Call).id
                      }`
                }
                buttonIcon1={
                  type === "recordings" ? "/icons/play.svg" : undefined
                }
                buttonText={type === "recordings" ? "Play" : "Start"}
                handleClick={
                  type === "recordings"
                    ? () => router.push(`${(meeting as CallRecording).url}`)
                    : () => router.push(`/meeting/${(meeting as Call).id}`)
                }
              />
            ))
        ) : (
          <h1 className="text-xl font-semibold text-white">{noCallsMessage}</h1>
        )}
      </div>
    </div>
  );
}
