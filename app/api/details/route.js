import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB();
        const {id} = await req.json();
        const post = await Post.findById(id);
        console.log("post : ", post);
        if(!post){
            return NextResponse.json({error : "Post not found"}, {status : 404});
        }
        return NextResponse.json({post});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}