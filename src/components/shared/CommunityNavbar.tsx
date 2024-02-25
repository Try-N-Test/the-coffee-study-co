import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.svg";

const CommunityNavbar = () => {
  return (
    <nav className=" flex w-full justify-between  gap-4 border-b border-secondary-6 bg-secondary-1 p-1 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} alt="OverFlow Dev" width={80} height={80} />
      </Link>

      <div className=" flex gap-5">
        <Link
          href="/communities/create-communities"
          className="my-auto text-primary-9"
        >
          create community
        </Link>
        <div className="my-auto">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default CommunityNavbar;
