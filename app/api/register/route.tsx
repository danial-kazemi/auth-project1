import User from "@/app/models/users";
import mongoConnect from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: Request){
    const res = await request.json();
    await mongoConnect();
 
    
  //   const user = new User(res);
  //   await user.save();
  //   console.log(res);    
  return new Response("Hello With POST", {
    status: 201
  })

}