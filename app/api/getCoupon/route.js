
import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
      await connectDB();
      const count = await coupon.countDocuments(); 
      if (count === 0) {
          return NextResponse.json({ error: "No coupons available" }, { status: 404 });
      }

      const randomIndex = Math.floor(Math.random() * count); 
      const randomCoupon = await coupon.findOne().skip(randomIndex); 

      await coupon.deleteOne({ _id: randomCoupon._id });

      return NextResponse.json({ success: true, coupon: randomCoupon }, { status: 200 });
  } catch (error) {
      console.error("Error:", error.message);
      return NextResponse.json({ error: "An error occurred while retrieving and deleting a random coupon: " + error.message }, { status: 500 });
  }
}