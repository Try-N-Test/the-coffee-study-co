import Image from "next/image";
import PublicNavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import CTA from "@/components/home/CTA";


export default function Home() {
  return (
    <>
      <PublicNavBar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
