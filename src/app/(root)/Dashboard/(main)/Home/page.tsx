import CurrentTime from "@/functions/CurrentTime";
import MeetingActionButton from "@/components/custom/MeetingActionButton";
import TodaysUpcomming from "@/components/custom/TodaysUpcomming";
import { Button } from "@/components/ui/button";
import moment from "moment";
import React from "react";
import UpcommingMeeting from "@/functions/UpcommingMeeting";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-full p-6 space-y-8 overflow-y-auto">
      <div
        className="h-96 rounded-2xl"
        style={{
          backgroundImage: "url('/image.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="inline-flex h-full p-6 flex-col justify-between text-white">
          <UpcommingMeeting />
          <div className="grid gap-2">
            <div className="flex gap-2 items-baseline text-white">
              <CurrentTime />
            </div>
            <span className="text-lg flex items-center">
              {moment().format("dddd")}, {moment().format("DD MMMM YYYY")}
            </span>
          </div>
        </div>
      </div>
      <div>
        <MeetingActionButton />
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:justify-between">
          <span className="text-3xl font-bold">
            Today&apos;s upcomming meeting
          </span>
          <Button variant="link" size="lg" asChild>
            <Link href="/Dashboard/Upcomming">See more</Link>
          </Button>
        </div>
        <div>
          <TodaysUpcomming type="upcoming" />
        </div>
      </div>
    </div>
  );
}
