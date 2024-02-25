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
import { Button } from "../ui/button";
import Link from "next/link";
import file_dock from "@/assets/Elements/File_dock.png";
import Image from "next/image";
const NotesCard = () => {
  return (
    <Card className="border-none  bg-transparent  drop-shadow-none">
      <CardTitle className="">
        {/* pass userName , createdAt , profileLink, profilePic, */}
        <UserAvatar />
      </CardTitle>
      <CardDescription className="mt-0 font-secondary text-base font-medium text-primary-9 lg:px-20">
        {/* article content goes here */}
        Lorem ipsum dolor sit amet consectetur. Quam aenean adipiscing neque
        mauris volutpat donec integer erat.
      </CardDescription>
      <CardContent className="max-w-xs rounded-xl  bg-primary-3 lg:mx-20">
        <div className="flex justify-start gap-5">
          <Image src={file_dock} width={100} height={100} alt="file" />
          <h3 className="m-auto text-start font-secondary text-xl font-semibold">
            Operating System Notes
          </h3>
        </div>
        <CardFooter className="flex justify-start gap-5 ">
          <Link href="#">
            <Button className="border-primary-3 bg-primary-1 text-primary-9 hover:bg-primary-2">
              View
            </Button>
          </Link>

          <Link href="#">
            <Button className="border-primary-3 bg-primary-1 text-primary-9 hover:bg-primary-2">
              Download
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default NotesCard;
