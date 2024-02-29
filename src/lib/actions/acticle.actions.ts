"use server";

import { Post } from "../models/post.model";
import { connectToDB } from "../mongoose";
import Community from "../models/community.model";
import { User } from "../models/user.model";
import { revalidatePath } from "next/cache";

export async function allPost(communityId: string) {
  try {
    connectToDB();
    const posts = await Post.find({ communityId });
    if (!posts) {
      throw new Error("No posts found!");
    }
    return posts;
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

interface AddPost {
  communityId: string;
  author: string;
  title: string;
  content: string;
  pathname: string;
}

export async function addPost({
  communityId,
  author,
  title,
  content,
  pathname,
}: AddPost) {
  try {
    connectToDB();

    const post = await Post.create({ communityId, author, title, content });
    await post.save();

    const community = await Community.findById(communityId);
    community.posts.push(post._id);
    await community.save();

    const user = await User.findById(author);
    user.posts.push(post._id);
    await user.save();

    revalidatePath(pathname);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
