import CreateCommunity from "@/components/forms/CreateCommunity";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Page = async() => {

  const user = await currentUser();

  if(!user){
    return null;
  }

  const userInfo = await fetchUser(user.id);

  if(!userInfo?.onboarded){
    return redirect("/onboarding");
  }

  return (
    <>
      <CreateCommunity userId={userInfo._id}  />
    </>
  );
};

export default Page;
