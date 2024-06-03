"use client";
import React from "react";
import { useGetCalls } from "@/hook/useGetCalls";
import moment from "moment";

export default function UpcommingMeeting() {
  const { upcomingCalls, isLoading } = useGetCalls();
  const getCalls = () => {
    return upcomingCalls;
  };
  if (isLoading) return null;
  const calls = getCalls();
  return (
    <div>
      {calls && calls.length > 0 ? (
        calls
          .reverse()
          .slice(0, 1)
          .map((meeting: any) => {
            if (
              moment(meeting.state?.startsAt).format("YYYY-MM-DD") ===
              moment().format("YYYY-MM-DD")
            ) {
              return (
                <div className="bg-white/5 rounded-lg p-2" key={meeting.id}>
                  <span className="flex gap-3">
                    Upcoming Meeting at:{" "}
                    {moment(meeting.state?.startsAt).format("hh:mm A")}
                  </span>
                </div>
              );
            }
            return (
              <div className="bg-white/5 rounded-lg p-2" key={meeting.id}>
                <span>No Upcoming Meeting 🎉</span>
              </div>
            );
          })
      ) : (
        <div className="bg-white/5 rounded-lg p-2">
          <span>No Upcoming Meeting 🎉</span>
        </div>
      )}
    </div>
  );
}
