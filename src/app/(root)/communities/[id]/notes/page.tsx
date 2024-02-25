import CommunityNavbar from "@/components/shared/CommunityNavbar";
import SideBar from "@/components/shared/Sidebar";
import React from "react";
interface UrlProps {
  params: string;
}
const Page = ({ params }: UrlProps) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div>
          <div style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
            <CommunityNavbar />
            <div className="flex bg-[#F4F4F5]" style={{ width: "100%" }}>
              <SideBar />
              <div className=" pt-6" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
