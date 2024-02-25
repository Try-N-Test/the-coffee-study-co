"use client";
import Image from "next/image";
import React from "react";
interface Props {
  icon: any;
  text: string;
}
const CTAButtons = ({ icon, text }: Props) => {
  return (
    <div className="cursor-pointer">
      <div className="flex justify-between gap-2 rounded-xl bg-white px-4 py-2.5 ">
        <Image
          src={icon}
          alt="Upvote"
          width={18}
          height={18}
          className=" "
          onClick={() => {}}
        />

        <p className="font-secondary text-base font-bold">{text}</p>
      </div>
    </div>
  );
};

export default CTAButtons;
