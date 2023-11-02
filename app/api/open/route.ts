import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const open=await Issue.count({status:"OPEN"})
    return NextResponse.json({open});
}