import CommunityNavbar from "@/components/shared/CommunityNavbar";
import Searchbar from "@/components/shared/Searchbar";
import circle_check from "@/assets/Elements/check-circle.svg";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { LuUsers } from "react-icons/lu";
import CommunityCTA from "@/components/shared/CommunityCTA";

const Page = () => {
  return (
    <>
      <div>
        <CommunityNavbar />
      </div>
      <div className="mt-16 grid grid-cols-1 content-center justify-items-center">
        <div>
          <h1 className="font-secondary text-6xl font-semibold">
            Find Your Community, One Cup at a Time
          </h1>
        </div>
        <div className="font-secondary my-11 flex w-4/5 justify-around    ">
          <div className="flex  gap-1 text-xl">
            <Image
              src={circle_check}
              alt="circle_check"
              width={20}
              height={20}
              className="my-auto"
            />
            <p className="my-auto text-center text-xl font-semibold">
              {" "}
              +1200 Communities
            </p>
          </div>
          <div className="flex gap-1 ">
            <Image
              src={circle_check}
              alt="circle_check"
              width={20}
              height={20}
              className="my-auto"
            />
            <p className="my-auto text-center text-xl font-semibold">
              {" "}
              +4500 Replies
            </p>
          </div>
          <div className="flex gap-1 ">
            <Image
              src={circle_check}
              alt="circle_check"
              width={20}
              height={20}
              className="my-auto"
            />
            <p className="my-auto text-center text-xl font-semibold">
              {" "}
              +2000 Members
            </p>
          </div>
        </div>
        <div className="mx-auto  flex w-full justify-center ">
          <Searchbar />
        </div>
      </div>
      <div className="mt-16 h-full rounded-2xl bg-primary-6 px-8 py-16">
        <h3 className="font-secondary  text-6xl font-semibold">
          Your Communities
        </h3>
        <div className="mx-4 mt-11 grid grid-cols-4 gap-5">
          {[0, 1, 2, 3].map((data, index) => (
            <Card
              className="font-primary group  relative max-w-xs text-center "
              key={index}
            >
              <CardTitle className="mt-4 text-4xl font-semibold">
                Progies
              </CardTitle>
              <CardDescription className="my-4 text-xl font-semibold text-primary-4">
                {" "}
                18.9k Members
              </CardDescription>
              <CardContent className="text-lg font-semibold text-primary-8">
                Lorem ipsum dolor sit amet consectetur. Mauris netus cum
                dignissim fermentum tempor rutrum. Ut urna sollicitudin erat
                pellentesque nam amet.
              </CardContent>
              <CardFooter className="absolute inset-x-0 bottom-0 hidden h-[2px] cursor-pointer  rounded-lg bg-primary-6/95 transition-all group-hover:grid group-hover:h-full group-active:bg-primary-6">
                <CardTitle className="flex h-full justify-center ">
                  <LuUsers className="mx-auto text-center text-7xl text-white" />
                </CardTitle>
                <CardDescription className="h-full  py-0 text-6xl font-semibold text-white">
                  Connect Now!
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <CommunityCTA />
      </div>
      <div className="mt-16 px-16 text-center">
        <h3 className="text-5xl font-semibold ">
          Find your passion, find{" "}
          <span className="text-primary-7"> your people.</span> Explore our{" "}
          <span className="text-primary-7">diverse communities</span> and
          belong.
        </h3>
        <div className="mx-4 mt-16 grid grid-cols-4 gap-5">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, index) => (
            <Card
              className="font-primary group  relative max-w-xs text-center "
              key={index}
            >
              <CardTitle className="mt-4 text-4xl font-semibold">
                Synergy
              </CardTitle>
              <CardDescription className="my-4 text-xl font-semibold text-primary-4">
                {" "}
                18.9k Members
              </CardDescription>
              <CardContent className="text-lg font-semibold text-primary-8">
                Lorem ipsum dolor sit amet consectetur. Mauris netus cum
                dignissim fermentum tempor rutrum. Ut urna sollicitudin erat
                pellentesque nam amet.
              </CardContent>
              <CardFooter className="absolute inset-x-0 bottom-0 hidden h-[2px] cursor-pointer  rounded-lg bg-primary-6/95 transition-all group-hover:grid group-hover:h-full group-active:bg-primary-6">
                <CardTitle className="flex h-full justify-center ">
                  <LuUsers className="mx-auto text-center text-7xl text-white" />
                </CardTitle>
                <CardDescription className="h-full  py-0 text-6xl font-semibold text-white">
                  Connect Now!
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
