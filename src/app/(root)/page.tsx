import Image from "next/image";
import PublicNavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <PublicNavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>

      <Footer />
    </>
  );
}
