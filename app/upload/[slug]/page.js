"use client"
import { useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const data = { email, couponCode };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/coupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.success) {
        setMessage("Coupon uploaded successfully!");
      } else {
        setMessage(res.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Coupon</h1>
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="couponId">Coupon ID:</label>
        <input className="border border-gray-300 p-2 mb-4 w-full" type="text" id="couponId" name="couponId" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} required />

        <label className="block mb-2" htmlFor="email">Email:</label>
        <input className="border border-gray-300 p-2 mb-4 w-full" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}
export default Page;
