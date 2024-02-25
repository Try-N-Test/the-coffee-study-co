import NotesCard from "@/components/cards/NotesCard";
import CommunityNavbar from "@/components/shared/CommunityNavbar";
import SideBar from "@/components/shared/Sidebar";
import React from "react";
interface UrlProps {
  params: { id: string };
}
const Page = ({ params }: UrlProps) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div>
          <div style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
            <CommunityNavbar />
            <div className="flex bg-[#F4F4F5]" style={{ width: "100%" }}>
              <SideBar dUrl={params.id} />
              <div className="bg-secondary-1 pt-6" style={{ width: "100%" }}>
                {[0, 1, 2, 3].map((data, index) => (
                  <div key={index}>
                    <NotesCard />;
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
