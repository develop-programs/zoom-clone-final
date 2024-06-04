import CustomCards from "@/components/custom/CustomCards";
import React from "react";

export default function page() {
  return (
    <div className="grid gap-6 p-6">
      <h1 className="text-3xl font-bold">Preview</h1>
      <CustomCards type="ended" />
    </div>
  );
}
