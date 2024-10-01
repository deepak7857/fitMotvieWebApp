import connectDB from "@/db/connectDb";
import signup from "@/models/signup";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";
export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json(); // Get the request body as JSON

        // Extract email and password from the body
        const email = body.email;
        const password = body.password;

        console.log("Email:", email); // Log the email for debugging

        // Find the user by email
        const userData = await signup.findOne({ email: email });
        const bytes=CryptoJS.AES.decrypt(userData.password, 'secret123')
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        // Log the entire user data
        console.log(originalText)
        if (!userData) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check password if it's stored in plain text (not recommended)
        if (originalText === password) {
            const responseData = { 
                message: "You are now logged in!",
                user: userData // Send the full user data back to the client
            };
            return NextResponse.json({ responseData, status: 200 });
        } else {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "An error occurred while processing the request" }, { status: 500 });
    }
}
