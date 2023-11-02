import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const ongoing=await Issue.count({status:"ONGOING"})
    return NextResponse.json({ongoing});
}