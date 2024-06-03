"use client";
import moment from "moment";
import React from "react";

export default function CurrentTime() {
  const [Time, setCurrentTime] = React.useState("");
  React.useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format("hh:mm a"));
    }, 1000);
  }, []);

  return (
    <>
      <span className="text-7xl font-black">{Time.split(" ")[0]}</span>
      <span className="text-lg font-bold">{Time.split(" ")[1]}</span>
    </>
  );
}
