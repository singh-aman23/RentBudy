import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(){
  try {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({posts}, {status : 200});
  } catch (error) {
    return NextResponse.json({error : "Failed to fetch posts"}, {status : 500});
  }
}
