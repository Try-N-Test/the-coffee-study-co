"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import UserAvatar from "../shared/UserAvatar";
import Votes from "../shared/Votes";
import CTAButtons from "../shared/CTAButtons";
import reply from "@/assets/Elements/reply.svg";
import share from "@/assets/Elements/share.svg";
import ReactPlayer from "react-player";

const VideoCard = () => {
  return (
    <Card className="drop-shadow-none">
      <CardTitle className="">
        {/* pass userName , createdAt , profileLink, profilePic, */}
        <UserAvatar />
      </CardTitle>
      <CardDescription className="mt-0 font-secondary text-base font-medium text-primary-9 lg:px-20">
        {/* article content goes here */}
        Lorem ipsum dolor sit amet consectetur. Quam aenean adipiscing neque
        mauris volutpat donec integer erat. Id pharetra faucibus neque vitae
        diam et. Pretium tristique fames phasellus massa vehicula faucibus
        suspendisse leo. Vel tristique a praesent ullamcorper vel. Gravida sed
        aliquet nulla congue. Nibh fringilla quam hac et porttitor. Ac facilisis
        eu aenean erat neque. Pharetra turpis enim vel erat. Elementum duis vel
        sit urna.
      </CardDescription>
      <CardContent className="lg:px-20 ">
        <ReactPlayer url="https://www.youtube.com/watch?v=SkgrkCTRZfw" />
      </CardContent>
      <CardFooter className="flex justify-start gap-5 lg:px-20">
        <Votes />
        <CTAButtons icon={reply} text={"Reply"} />
        <CTAButtons icon={share} text={"Share"} />
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
