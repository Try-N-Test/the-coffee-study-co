"use server"
import { revalidatePath } from "next/cache";
import Community from "../models/community.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function createCommunity(
  name: string,
  description: string,
  createdById: string, // Change the parameter name to reflect it's an id
  pathname: string,
) {
  try {
    connectToDB();

    // Find the user with the provided unique id
    const user = await User.findOne({ id: createdById });
    if (!user) {
      throw new Error("User not found"); // Handle the case if the user with the id is not found
    }

    const newCommunity = await Community.create({
      name,
      description,
      createdBy: user._id, // Use the mongoose ID of the user
    });

    const createdCommunity = await newCommunity.save();

    // Update User model
    user.communities.push(createdCommunity._id);
    await user.save();

    revalidatePath(pathname); // Revalidate the path after creating the community
  } catch (error) {
    // Handle any errors
    console.error("Error creating community:", error);
    throw error;
  }
}
