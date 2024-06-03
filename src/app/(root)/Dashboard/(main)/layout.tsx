import Loader from "@/components/custom/Loader";
import MobileNav from "@/components/custom/MobileNav";
import SideNav from "@/components/custom/SideNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-full flex">
      <div className="hidden lg:block w-72">
        <SideNav />
      </div>
      <div className="w-full h-full">
        <div className="bg-dark1 w-full flex justify-between lg:justify-end p-4 lg:pe-12">
          <div className="block lg:hidden">
            <MobileNav />
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Suspense fallback={<Loader />}>
          <div className="h-[calc(100vh-3.8rem)] overflow-hidden">
            {children}
          </div>
        </Suspense>
      </div>
    </main>
  );
}
