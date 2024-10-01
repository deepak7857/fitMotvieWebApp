import connectDB from "@/db/connectDb";
import coupon from "@/models/coupon";
import { NextResponse } from "next/server";

// Handle CORS for preflight requests
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://your-frontend-domain.com', // Replace with your frontend domain
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function GET(request) {
  try {
    // Connect to the database
    await connectDB();

    // Count the number of documents (coupons) in the collection
    const count = await coupon.countDocuments();

    // If there are no coupons, return a 404 response
    if (count === 0) {
      return NextResponse.json({ error: "No coupons available" }, { 
        status: 404, 
        headers: {
          'Access-Control-Allow-Origin': 'https://your-frontend-domain.com', // Replace with your frontend domain
        },
      });
    }

    // Generate a random index based on the total count
    const randomIndex = Math.floor(Math.random() * count);

    // Find a random coupon by skipping randomIndex documents
    const randomCoupon = await coupon.findOne().skip(randomIndex);

    if (!randomCoupon) {
      return NextResponse.json({ error: "Failed to find a random coupon" }, { 
        status: 500, 
        headers: {
          'Access-Control-Allow-Origin': 'https://your-frontend-domain.com', // Replace with your frontend domain
        },
      });
    }

    // Delete the random coupon from the database
    await coupon.deleteOne({ _id: randomCoupon._id });

    // Return the coupon that was selected and deleted
    return NextResponse.json({ success: true, coupon: randomCoupon }, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://your-frontend-domain.com', // Replace with your frontend domain
      },
    });

  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ 
      error: "An error occurred while retrieving and deleting a random coupon: " + error.message 
    }, { 
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://your-frontend-domain.com', // Replace with your frontend domain
      },
    });
  }
}
