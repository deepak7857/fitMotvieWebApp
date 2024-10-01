import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
      await connectDB();
      const body = await request.json(); // Get the request body as JSON


     let details = new coupon({
        email:body.email,
        couponCode:body.couponCode

    });
    await details.save();
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: "An error occurred while processing the request" }, { status: 500 });
  }
}