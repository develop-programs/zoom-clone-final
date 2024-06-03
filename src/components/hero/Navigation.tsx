import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center py-6 px-10">
      <Logo />
      <div className="flex space-x-4 items-center">
        <Link href="/contact" passHref legacyBehavior>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </Link>
        <Link href="/pricing" passHref legacyBehavior>
          <Button variant="ghost" size="sm">
            Pricing
          </Button>
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedIn>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full bg-blue-600 hover:bg-blue-600/80"
          >
            <Link href="/Dashboard/Home">Dashboard</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button variant="ghost" size="sm" asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
