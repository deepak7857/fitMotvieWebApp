import connectDB from "@/db/connectDb";
import signup from "@/models/signup";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        
        // Hashing the password securely
        const hashedPassword = CryptoJS.AES.encrypt(body.password, process.env.ENCRYPTION_SECRET || 'secret123').toString();
        
        // Create a new signup entry
        let details = new signup({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            mobileNumber: body.mobileNumber,
            password: hashedPassword,
            level: body.level,
            userType: body.userType
        });

        // Save the details in the database
        await details.save();
        
        // Create a JWT token
        const token = jwt.sign({ id: details._id }, process.env.JWT_SECRET || 'adfadlfakdlfd', { expiresIn: '10d' });

        // Add CORS headers to the response
        return NextResponse.json(
            { success: true, token },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*', // Use environment variable for production
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    } 
    catch (e) {
        console.log(e.message);
        return NextResponse.json(
            { success: false, error: "An error occurred" },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*', // Use environment variable for production
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    }
}

export async function OPTIONS(request) {
    return NextResponse.json({}, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*', // Use environment variable for production
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}
