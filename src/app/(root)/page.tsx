import Image from "next/image";
import PublicNavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/communities");
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
