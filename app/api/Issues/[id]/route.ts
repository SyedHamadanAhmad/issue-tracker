import connectMongoDB from "@/libs/mongo";
import Issue from "@/models/issue";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export async function PUT(request:NextRequest, {params}:{params:{id:number}}){
    const {id}=params
    const {newTitle:title, newDescription:description, newStatus:status}=await request.json();
    const session = await getServerSession(authOptions)
    const name=session!.user!.name
    const email=session!.user!.email
    await connectMongoDB()
    await Issue.findByIdAndUpdate(id, {title, description, status, name,email})
    return NextResponse.json({message:`Issue with id: ${id} updated`})
}

export async function GET(request:NextRequest,{params}:{params:{id:number}}){
    const {id}=params
    await connectMongoDB();
    const issues=await Issue.findOne({_id:id});
    return NextResponse.json({issues})

}