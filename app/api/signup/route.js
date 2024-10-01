    import connectDB from "@/db/connectDb";
    import signup from "@/models/signup";
    import { NextResponse } from "next/server";
    import CryptoJS from "crypto-js";
    import jwt from 'jsonwebtoken';
    export async function POST(request) {
        try {
            await connectDB();
            const body = await request.json();
            const hashedPassword = CryptoJS.AES.encrypt(body.password, 'secret123').toString();
            
            let details = new signup({
                firstName:body.firstName,
                lastName:body.lastName,
                email:body.email,
                mobileNumber:body.mobileNumber,
                password:hashedPassword,
                level:body.level,
                userType:body.userType

            });
            await details.save();
            const token = jwt.sign({ id: details._id }, 'adfadlfakdlfd', { expiresIn: '10d' });
            return NextResponse.json({ success: true,token }, { status: 200 })
        } 
        catch(e){
            console.log(e.message)
            return NextResponse.json({ success: false }, { status: 500 })
        }
    }
    