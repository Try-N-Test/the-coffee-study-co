import React from "react";
import { Button } from "../ui/button";

const CommunityCTA = () => {
  return (
    <section className="bg-primary-3 py-6 text-black">
      <div className="container mx-auto my-auto flex flex-col items-center justify-center space-y-8 p-4 md:p-10 lg:flex-row lg:justify-between lg:space-y-0">
        <h1 className=" font-secondary text-center text-6xl  font-semibold lg:text-left">
          Don&#39;t just join, build! Create your own community!
        </h1>
        <Button className="text-primary rounded bg-secondary-6 px-8 py-3 text-lg font-normal text-white">
          Let&#39;s Create
        </Button>
      </div>
    </section>
  );
};

export default CommunityCTA;
