"use server";

import { connectToDB } from "../mongoose";
import { User } from "@/lib/models/user.model";
import Community from "@/lib/models/community.model";
import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId }).populate({
      path: "communities",
      model: Community,
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
  }

  export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    image,
  }: Params): Promise<void> {
    try {
      connectToDB();
  
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          onboarded: true,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }
