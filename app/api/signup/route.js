import connectDB from "@/db/connectDb";
import signup from "@/models/signup";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'; // Import bcrypt for hashing
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // Create a new user
        let details = new signup({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            mobileNumber: body.mobileNumber,
            password: hashedPassword,
            level: body.level,
            userType: body.userType
        });

        // Save the user to the database
        await details.save();

        // Create a JWT token
        const token = jwt.sign({ id: details._id }, process.env.JWT_SECRET || 'defaultSecret', { expiresIn: '10d' });

        return NextResponse.json({ success: true, token }, { status: 200 });
    } catch (e) {
        console.error("Registration error:", e.message);
        return NextResponse.json({ success: false, error: "Registration failed. Please try again." }, { status: 500 });
    }
}
