import Arrow from "@/assets/Elements/Arrow_hero.svg";
import Image from "next/image";
import Lines from "@/assets/Elements/Three_lines_hero.svg";
import hero from "@/assets/images/hero.png";

const Hero = () => {
  return (
    <section className="grid grid-cols-12 items-center gap-8 border-t-4 border-secondary-5 bg-primary-6 px-20 py-14">
      <div className="relative col-span-3">
        <Image src={Arrow} alt="arrow" className="absolute -left-24 -top-10" />
        <h2 className="py-6 pl-8 text-5xl font-semibold text-secondary-1">
          Forget the lecture hall, enter the learning circle. Connect,
          collaborate, and thrive
        </h2>
        <Image
          src={Lines}
          alt="arrow"
          className="absolute -bottom-12 -right-16"
        />
      </div>
      <div className="relative col-span-7 flex h-96 items-center">
        <div className="absolute left-12 top-16 z-10 h-96 w-[500px] rounded-2xl bg-secondary-6"></div>
        <div className="absolute z-30  mx-24 rounded-2xl bg-secondary-1 p-8">
          <Image src={hero} height={350} alt="hero image"></Image>
        </div>
        <div className="absolute -top-12 right-14 z-10 h-96 w-48 rounded-2xl bg-secondary-6"></div>
      </div>
      <div className="col-span-2 flex flex-col justify-around gap-12 font-primary text-primary-1">
        <div className="flex flex-row items-center gap-6">
          <h3 className=" pb-3 text-5xl underline decoration-secondary-6 underline-offset-8">
            01
          </h3>
          <h3 className="py-2 text-2xl">Create Account</h3>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h3 className=" pb-3 text-5xl underline decoration-secondary-6 underline-offset-8">
            02
          </h3>
          <h3 className="py-2 text-2xl">Connect and Tribe Up</h3>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h3 className=" pb-3 text-5xl underline decoration-secondary-6 underline-offset-8">
            03
          </h3>
          <h3 className="py-2 text-2xl">Enjoy Learing</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
