import connectDB from "@/db/connectDb";
import firstPage from "@/models/firstPage";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    await connectDB(); // Establish database connection
    const body = await request.json(); // Parse the request body as JSON

    // Check if params and slug are available
    if (!params || !params.slug) {
      return NextResponse.json({ error: "Email (slug) parameter is required" }, { status: 400 });
    }

    // Create a new entry for the firstPage model
    let details = new firstPage({
      email: params.slug, // Dynamic route parameter (email)
      age: body.age,
      height: body.height,
      weight: body.weight,
      gender: body.gender,
      medCondn: body.medCondn
    });

    // Save the new entry to the database
    await details.save();

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.log("Error:", e.message);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
