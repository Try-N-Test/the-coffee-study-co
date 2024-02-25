"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChatRight } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { PiNotePencilLight } from "react-icons/pi";
interface SidebarLink {
  icons: React.ElementType;
  route: string;
  label: string;
}
interface Props {
  dUrl: string;
}
const SideBar = ({ dUrl }: Props) => {
  const pathname = usePathname();
  console.log(pathname);

  const sidebarLinks: SidebarLink[] = [
    {
      icons: BsChatRight,
      route: `/communities/${dUrl}/chat-room`,
      label: "Chat Rooms",
    },
    {
      icons: GrGroup,
      route: `/communities/${dUrl}/notes`,
      label: "Notes",
    },
    {
      icons: PiNotePencilLight,
      route: `/communities/${dUrl}/articles`,
      label: "Articles",
    },
    {
      icons: CiYoutube,
      route: `/communities/${dUrl}/videos`,
      label: "Videos",
    },
  ];

  return (
    <section className=" custom-scrollbar sticky left-0  top-0 flex h-screen shrink flex-col  justify-between  overflow-y-auto    p-6  pt-24  max-sm:hidden lg:w-[266px]   ">
      <div className="flex flex-1 flex-col gap-2 ">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <>
              <Link
                key={item.route}
                href={item.route}
                className={`${
                  isActive
                    ? "rounded-lg   bg-secondary-6  text-white"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 rounded-2xl bg-primary-1 p-4`}
              >
                {React.createElement(item?.icons, { size: "20" })}

                <p
                  className={`max-lg:hidden ${
                    isActive ? "base-bold " : "base-medium"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            </>
          );
        })}

        <div className="mt-36">
          <div className="flex flex-col gap-3">
            <>
              <Link href="/sign-in">
                <Button className="flex w-full items-center justify-start gap-4 rounded-2xl bg-primary-4 p-4  hover:bg-secondary-6">
                  <span className="text-black ">Setting</span>
                </Button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
