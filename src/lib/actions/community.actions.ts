"use server";
import { revalidatePath } from "next/cache";
import Community from "../models/community.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  name: string;
  description: string;
  createdById: string; // Change the parameter name to reflect it's an id
  pathname: string;
}

export async function createCommunity({
  name,
  description,
  createdById,
  pathname,
}: Params) {
  try {
    connectToDB();

    // Find the user with the provided unique id
    const user = await User.findById(createdById);

    if (!user) {
      throw new Error("User not found"); // Handle the case if the user with the id is not found
    }

    const newCommunity = await Community.create({
      name,
      description,
      createdBy: user._id, // Use the mongoose ID of the user
      members: [user._id],
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

export async function getCommunityById(id: string) {
  try {
    connectToDB();
    const community = await Community.findById(id);
    if (!community) {
      throw new Error("Community not found");
    }
    return community;
  } catch (error) {
    console.error("Error getting community by id:", error);
    throw error;
  }
}

export async function getCommunities() {
  try {
    connectToDB();
    const communities = await Community.find();
    if (!communities) {
      throw new Error("Community not found");
    }
    return communities;
  } catch (error) {
    console.error("Error getting communities:", error);
    throw error;
  }
}

export async function getCommunitiesOfUser(userId: string) {
  try {
    connectToDB();
    const communities = await Community.find({ createdBy: userId });
    if (!communities) {
      throw new Error("Communities were not found");
    }

    return communities;
  } catch (error) {
    console.error("Error getting communities of user:", error);
    throw error;
  }
}

export async function joinCommunity(userId: string, communityId: string) {
  try {
    connectToDB();
    const community = await Community.findById(communityId);
    if (!community) {
      throw new Error("Community not found");
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    community.members.push(user._id);
    await community.save();

    user.communities.push(community._id);
    await user.save();

    revalidatePath(`/communities/${communityId}`); // Revalidate the path after joining the community
  } catch (error) {
    console.error("Error joining community:", error);
    throw error;
  }
}

export async function getOtherCommunities(userId: string) {
  try {
    connectToDB();
    const communities = await Community.find({ members: { $ne: userId } });
    if (!communities) {
      throw new Error("Other communities not found");
    }
    return communities;
  } catch (error) {
    console.error("Error getting other communities:", error);
    throw error;
  }
}
