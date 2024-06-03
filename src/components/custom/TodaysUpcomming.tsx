"use client";

import { Call } from "@stream-io/video-react-sdk";
import { useGetCalls } from "@/hook/useGetCalls";
import MeetingCard from "@/components/custom/Card";
import { useRouter } from "next/navigation";
import moment from "moment";
import React from "react";
import Loader from "@/components/custom/Loader";

export default function TodaysUpcomming({ type }: { type: "upcoming" }) {
  const router = useRouter();
  const { upcomingCalls, isLoading } = useGetCalls();
  const getCalls = () => {
    switch (type) {
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  if (isLoading) return <Loader />;

  const calls = getCalls();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.reverse().map((meeting: Call) => {
          if (
            moment(meeting.state?.startsAt).format("YYYY-MM-DD") !==
            moment().format("YYYY-MM-DD")
          ) {
            return (
              <div key={(meeting as Call).id}>
                <span className="text-sm font-normal">
                  No Upcoming Meeting 🎉
                </span>
              </div>
            );
          } else {
            return (
              <MeetingCard
                key={(meeting as Call).id}
                icon="/icons/upcomming.svg"
                title={(meeting as Call).state?.custom?.description}
                date={(meeting as Call).state?.startsAt?.toLocaleString() || ""}
                link={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                  (meeting as Call).id
                }`}
                buttonIcon1={undefined}
                buttonText={"Start"}
                handleClick={() =>
                  router.push(`/meeting/${(meeting as Call).id}`)
                }
              />
            );
          }
        })
      ) : (
        <div>
          <span className="text-sm font-normal">No Upcoming Meeting 🎉</span>
        </div>
      )}
    </div>
  );
}
