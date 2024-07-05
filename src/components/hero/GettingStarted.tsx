"use client";
import React from "react";
import { Button } from "../ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function GettingStarted() {
  const { user } = useUser();
  if (user) return null;
  else {
    return (
      <Button className="bg-blue-600 dark:bg-blue-700 dark:text-white dark:hover:text-blue-600 dark:hover:bg-transparent hover:bg-transparent hover:text-blue-600 border border-blue-600 px-8 py-6 hover:shadow-4xl hover:shadow-blue-600">
        <SignInButton>
          <span className="uppercase">Get Started</span>
        </SignInButton>
      </Button>
    );
  }
}
