import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

// Handle preflight requests (OPTIONS method for CORS)
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://fit-motvie-web-app-m32f-mb7u0bb4x-toxyinfotechs-projects.vercel.app',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request) {
  try {
    await connectDB(); // Establish database connection
    const body = await request.json(); // Parse JSON body

    // Validate if couponCode is provided
    if (!body.couponCode) {
      return NextResponse.json(
        { error: "Coupon code is required" },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': 'https://fit-motvie-web-app-m32f-mb7u0bb4x-toxyinfotechs-projects.vercel.app',
          },
        }
      );
    }

    // Check if the coupon code exists in the database
    const existingCoupon = await coupon.findOne({ couponCode: body.couponCode });

    if (existingCoupon) {
      // Return success if coupon exists
      return NextResponse.json(
        { success: true, message: "Coupon is valid" },
        {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': 'https://fit-motvie-web-app-m32f-mb7u0bb4x-toxyinfotechs-projects.vercel.app',
          },
        }
      );
    } else {
      // Return error if coupon doesn't exist
      return NextResponse.json(
        { error: "Coupon not found" },
        {
          status: 404,
          headers: {
            'Access-Control-Allow-Origin': 'https://fit-motvie-web-app-m32f-mb7u0bb4x-toxyinfotechs-projects.vercel.app',
          },
        }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request" },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://fit-motvie-web-app-m32f-mb7u0bb4x-toxyinfotechs-projects.vercel.app',
        },
      }
    );
  }
}
