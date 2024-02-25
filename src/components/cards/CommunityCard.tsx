"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { joinCommunity } from "@/lib/actions/community.actions";
interface Props {
  name: string;
  description: string;
  membersLength: number;
  userId: any;
  communityId: any;
}
const CommunityCard = ({
  name,
  description,
  membersLength,
  userId,
  communityId,
}: Props) => {
  return (
    <div>
      <Card className="group relative  min-h-72 max-w-xs text-center font-primary ">
        <CardTitle className="mt-4 text-4xl font-semibold">{name}</CardTitle>
        <CardDescription className="my-4 text-xl font-semibold text-primary-4">
          {" "}
          {membersLength} members
        </CardDescription>
        <CardContent className="text-lg font-semibold text-primary-8">
          {description}
        </CardContent>

        <CardFooter className=" flex justify-center">
          <Button
            onClick={async () => {
              await joinCommunity(userId, communityId);
            }}
            className="bg-secondary-6 hover:bg-secondary-7 "
          >
            {" "}
            Join Now!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CommunityCard;
