import { connectMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      houseNumber,
      city,
      state,
      pincode,
      preferance,
      rent,
      roommates,
      bhk,
      utilities,
      userEmail,
      contact,
      image
    } = await req.json();

    await connectMongoDB();
    await Post.create({
      houseNumber,
      city,
      state,
      pincode,
      preferance,
      rent,
      roommates,
      bhk,
      utilities,
      userEmail,
      contact,
      image
    });

    return NextResponse.json(
      { message: "successul post request" },
      { status: 201 }
    );
  } catch (error) {
    console.log(
      console.log(
        "Received data:",
        houseNumber,
        city,
        state,
        pincode,
        preferance,
        rent,
        roommates,
        bhk,
        utilities,
        userEmail,
        contact,
        image
      )
    );

    return NextResponse.json(
      { message: "an error occured", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectMongoDB();
    const { id } = await req.json();
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}