"use client";
import React from "react";
import { Button } from "../ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function GettingStarted() {
  const { user } = useUser();
  if (user) return null;
  else {
    return (
      <Button className="bg-black border-2 border-blue-600 shadow-md shadow-white text-blue-600 hover:bg-transparent px-8 py-6">
        <SignInButton>
          <span className="uppercase">Get Started</span>
        </SignInButton>
      </Button>
    );
  }
}
