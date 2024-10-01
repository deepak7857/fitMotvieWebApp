import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB(); // Establish database connection
    const body = await request.json(); // Parse JSON body

    // Validate if couponCode is provided
    if (!body.couponCode) {
      return NextResponse.json({ error: "Coupon code is required" }, { status: 400 });
    }

    // Check if the coupon code exists in the database
    const existingCoupon = await coupon.findOne({ couponCode: body.couponCode });

    if (existingCoupon) {
      // Return success if coupon exists
      return NextResponse.json({ success: true, message: "Coupon is valid" }, { status: 200 });
    } else {
      // Return error if coupon doesn't exist
      return NextResponse.json({ error: "Coupon not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred while processing the request" }, { status: 500 });
  }
}
