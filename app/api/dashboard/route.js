import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { userEmail } = await req.json();
    const posts = await Post.find({ userEmail: userEmail });
    console.log("posts: ", posts);
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
