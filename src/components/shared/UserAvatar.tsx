import Image from "next/image";
import { formatDateString } from "@/lib/utils";
import React from "react";
import avatar from "@/assets/images/avatar.png";
import Link from "next/link";
interface AvatarProps {
  profilePic?: string;
  profileLink?: string;
  userName?: string;
  postedOn?: Date;
}
const UserAvatar = ({
  profilePic,
  profileLink,
  userName,
  postedOn,
}: AvatarProps) => {
  return (
    <div className="flex gap-2">
      {/* profile link here */}
      <Link className="flex gap-2" href="#">
        <Image
          alt="profile pic"
          className="my-auto"
          // profile pic here
          src={avatar}
          width={50}
          height={50}
        />
        {/* userName here */}
        <p className="my-auto font-secondary  text-xl">UserName</p>
      </Link>
      <p className="my-auto font-secondary text-lg font-semibold text-primary-3 ">
        {/* posted /created  on here */}
        {formatDateString("2024-02-25T12:00:00Z")}
      </p>
    </div>
  );
};

export default UserAvatar;
