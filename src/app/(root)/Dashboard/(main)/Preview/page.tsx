import CustomCards from "@/components/custom/CustomCards";
import React from "react";

export default function page() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <CustomCards type="ended" />
    </div>
  );
}
