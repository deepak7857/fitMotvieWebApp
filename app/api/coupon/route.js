import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

// Handle CORS for preflight requests
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Adjust this to restrict access to your specific domain
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request) {
  try {
    await connectDB(); // Connect to the database
    const body = await request.json(); // Get the request body as JSON

    // Basic validation to ensure required fields are present
    if (!body.email || !body.couponCode) {
      return NextResponse.json(
        { error: "Email and coupon code are required" },
        { status: 400 }
      );
    }

    // Create a new coupon entry
    let details = new coupon({
      email: body.email,
      couponCode: body.couponCode,
    });

    // Save the coupon details to the database
    await details.save();

    // Return success response
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust this to your frontend domain
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request" },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust this to your frontend domain
        },
      }
    );
  }
}
