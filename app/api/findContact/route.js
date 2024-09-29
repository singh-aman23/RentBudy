import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB();
        const {userEmail} = await req.json();
        const contactObj = await Contact.findOne({email : userEmail});
        console.log("contact :", contactObj);
        return NextResponse.json({contactObj});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}