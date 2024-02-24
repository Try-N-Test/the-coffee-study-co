import React from "react";
import about from "@/assets/images/about.png";
import three_lines_about from "@/assets/Elements/Three_lines_about.svg";
import three_lines_about_lower from "@/assets/Elements/Three_lines_about_lower.svg";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-primary-3 lg:h-screen">
      <div className="ppx-4 mx-auto py-8 sm:px-6 sm:py-12 lg:px-44 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative my-auto  h-64 overflow-hidden rounded-2xl  bg-primary-6 sm:h-80 lg:order-last">
            <Image
              width={500}
              height={500}
              alt=""
              src={about}
              className="absolute inset-0 size-full object-cover object-center p-2"
            />
          </div>

          <div className="max-w-xs  lg:py-24">
            <Image
              width={25}
              height={25}
              alt="three_lines_about"
              src={three_lines_about}
              className="absolute -bottom-72 left-24  size-fit object-contain"
            />
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to unlock your potential? Discover what The Coffee Study Co.
              is all about.
            </h2>

            <p className="mt-4 text-start text-sm font-normal text-black">
              Lorem ipsum dolor sit amet consectetur. Suspendisse pulvinar sit
              nunc scelerisque felis cras sed. Risus volutpat feugiat egestas
              mauris sit dolor. Gravida tellus lectus nibh nulla in in. Enim
              viverra aliquam ullamcorper vitae quis ac tellus augue. Tellus a
              cras enim phasellus ultrices integer.
            </p>
            <Image
              width={25}
              height={25}
              alt="three_lines_about_lower"
              src={three_lines_about_lower}
              className="absolute -bottom-[700px] left-[440px]  size-fit object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
