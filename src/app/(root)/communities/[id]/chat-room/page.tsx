import CommunityNavbar from "@/components/shared/CommunityNavbar";
import SideBar from "@/components/shared/Sidebar";
import { getCommunityById } from "@/lib/actions/community.actions";
import React from "react";
interface UrlProps {
  params: { id: string };
}
const Page = async ({ params }: UrlProps) => {
  console.log(params.id, "test");
  const result = await getCommunityById(params.id);
  console.log(result, "result from chat room");
  return (
    <>
      <div style={{ width: "100%" }}>
        <div>
          <div style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
            <CommunityNavbar />
            <div className="flex bg-[#F4F4F5]" style={{ width: "100%" }}>
              <SideBar />
              <div className=" pt-6" style={{ width: "100%" }}>
                {result.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
