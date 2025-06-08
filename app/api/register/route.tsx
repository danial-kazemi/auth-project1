import UserModel from "@/app/models/users";
import mongoConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: Request){
    const res = await request.json();
    const data = {...res, date: new Date()}
    
    await mongoConnect();    
    const user = new UserModel(data);
    await user.save();      
    return new Response("Hello With POST", {
      status: 201
    })
}