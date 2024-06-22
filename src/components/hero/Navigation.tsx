import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center py-6 px-5 sm:px-10">
      <Logo />
      <div className="hidden sm:flex space-x-4 items-center">
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
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4">
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
