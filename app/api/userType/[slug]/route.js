import connectDB from "@/db/connectDb";
import signup from "@/models/signup";
import { NextResponse } from "next/server";

export async function POST(request,{params}) {
    try {
        await connectDB();
        const email = params.slug

        // Check if a coupon with the same email already exists
        const user = await signup.findOne({ email: email });
        if (user) {
            return NextResponse.json({ success: true, userData: user.userType }, { status: 200 });
        }

        // If it doesn't exist, you can proceed with your logic (e.g., creating a new coupon)
        // For example, if you want to return a success message without inserting:
        return NextResponse.json({ message: "No user found" }, { status: 404 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "An error occurred while processing the request" }, { status: 500 });
    }
}