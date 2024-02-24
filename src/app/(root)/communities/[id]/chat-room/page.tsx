import CommunityNavbar from "@/components/shared/CommunityNavbar";
import SideBar from "@/components/shared/Sidebar";
import React from "react";
interface UrlProps {
  params: string;
}
const Page = ({ params }: UrlProps) => {
  return (
    <>
      <div>
        <CommunityNavbar />
      </div>
      <div>
        <SideBar />
      </div>
    </>
  );
};

export default Page;
