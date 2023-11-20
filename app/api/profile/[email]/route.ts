import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}){
    const {email}=params
    await connectMongoDB();
    const issues=await Issue.find({email:email});
    return NextResponse.json({issues})

}