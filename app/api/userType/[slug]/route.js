import connectDB from "@/db/connectDb";
import signup from "@/models/signup";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    try {
        await connectDB();
        const email = params.slug; // Extract email from the params

        // Check if a user with the same email already exists
        const user = await signup.findOne({ email: email });
        if (user) {
            return NextResponse.json(
                { success: true, userData: user.userType },
                { 
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*', // Change '*' to your frontend URL for production
                        'Access-Control-Allow-Methods': 'POST, OPTIONS', // Specify allowed methods
                        'Access-Control-Allow-Headers': 'Content-Type', // Specify allowed headers
                    }
                }
            );
        }

        // If no user found, return a message indicating that
        return NextResponse.json(
            { success: false, message: "No user found" }, 
            { 
                status: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { success: false, error: "An error occurred while processing the request" }, 
            { 
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    }
}
