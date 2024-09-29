import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {email, contact} = await req.json();
        await connectMongoDB();
        await Contact.create({email,contact});
        return NextResponse.json({message : "Contact registered succesfully"}, {status : 201});
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({message : "Contact registration failed"}, {status : 500});
    }
}