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

import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import {
  getCommunities,
  getCommunitiesOfUser,
  getOtherCommunities,
} from "@/lib/actions/community.actions";
import { PiArrowSquareInThin } from "react-icons/pi";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CommunityCard from "@/components/cards/CommunityCard";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) return redirect("/onboarding");

  const communities = await getOtherCommunities(userInfo._id);
  const userCommunities = await getCommunitiesOfUser(userInfo._id);

  console.log(communities);
  console.log(userCommunities, "user community");
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
        <div className="my-11 flex w-4/5 justify-around font-secondary    ">
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
          {userCommunities.length > 0 ? (
            userCommunities.map((data, index) => (
              <Card
                className="group relative min-h-72  max-w-xs text-center font-primary "
                key={index}
              >
                <CardTitle className="mt-4 text-4xl font-semibold">
                  {data.name}
                </CardTitle>
                <CardDescription className="my-4 text-xl font-semibold text-primary-4">
                  {" "}
                  {data.members.length} Members
                </CardDescription>
                <CardContent className="text-lg font-semibold text-primary-8">
                  {data.description}
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href={`/communities/${data._id}/chat-room`}>
                    <Button className="bg-secondary-6 hover:bg-secondary-7 ">
                      {" "}
                      Connect Now!
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <>
              <h1 className="text-5xl">You haven&#39;t join any community</h1>
            </>
          )}
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
        <div className="mx-4 my-16 grid grid-cols-4 gap-5">
          {communities.map((data, index) => (
            <>
              <CommunityCard
                key={index}
                name={data.name}
                description={data.description}
                membersLength={data.members.length}
                userId={userInfo._id}
                communityId={data._id}
              />
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
