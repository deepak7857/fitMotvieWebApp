import connectDB from "@/db/connectDb";
import firstPage from "@/models/firstPage";
import { NextResponse } from "next/server";

export async function POST(request,{params}) {
    try {
        await connectDB();
        const body = await request.json();

        let details = new firstPage({
        email:params.slug,
        age:body.age,
        height:body.height,
        weight:body.weight,
        gender:body.gender,
        medCondn:body.medCondn
        });
        await details.save();
        return NextResponse.json({ success: true }, { status: 200 })
    } 
    catch(e){
        console.log(e.message)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}