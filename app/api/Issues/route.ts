import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const {title, description}=await request.json()
    await connectMongoDB();
    await Issue.create({title, description})
    return NextResponse.json({message:`Issue ${title} created`}, {status:201})
}

export async function GET() {
    await connectMongoDB();
    const issues=await Issue.find();
    return NextResponse.json({issues})
}

export async function DELETE(request:NextRequest){
    const id= request.nextUrl.searchParams.get('id')
    await connectMongoDB();
    const {title} = await Issue.findById(id)
    await Issue.findByIdAndDelete(id);

    return NextResponse.json({message:`Issue with id:${id} and title: ${title} deleted`})
}