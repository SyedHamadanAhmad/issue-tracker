import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const closed=await Issue.count({status:"CLOSED"})
    return NextResponse.json({closed});
}