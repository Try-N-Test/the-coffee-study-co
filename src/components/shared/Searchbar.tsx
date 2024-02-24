import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../ui/button";

const Searchbar = () => {
  return (
    <div className=" w-full max-w-5xl ">
      <div
        className=" flex min-h-[56px] items-center  justify-center gap-1 rounded-xl bg-primary-2 px-4
      "
      >
        <AiOutlineSearch className="size-6 cursor-pointer" />
        <Input
          type="text"
          placeholder="Look for Communitites"
          value=""
          className="border-none bg-primary-2 text-primary-1 outline-0 placeholder:text-primary-1  focus:ring-0"
        />
        <Button className="border border-secondary-6 bg-secondary-6 transition duration-200 hover:bg-transparent hover:text-secondary-6">
          {" "}
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
