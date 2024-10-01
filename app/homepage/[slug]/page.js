  "use client"
  import React from "react";
  import { useState } from "react";
  import { useEffect } from "react";
  import Link from "next/link";
import { useRouter } from "next/navigation";
  export default function Home({params}) {
    const Router=useRouter()
    const [userType, setUserType] = useState("");
      const [error, setError] = useState("");
      const [couponApplied, setCouponApplied] = useState(false); 
      const email = params.slug;
    useEffect(() => {
      const fetchUserType = async () => {
          try {
              const response = await fetch(`http://localhost:3000/api/userType/${email}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  } // Send the email in the request body
              });

              if (!response.ok) {
                  throw new Error('Failed to fetch user type');
              }

              const data = await response.json();
              setUserType(data.userData); // Set the user type from the response
          } catch (err) {
              setError(err.message); // Handle any errors
          }
      };

      fetchUserType();
  }, [email]);
  const navigateToUpload=()=>{
    Router.push(`/upload/${email}`)
  }
    const [count,setCount]=useState(1)
    const handleClick=async()=>{
      if(couponApplied){
        alert("coupon is applied Please refesh the page")
      }
      if(count%30==0){
        setCouponApplied(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/getCoupon`);
        const res = await response.json();
        alert(res.coupon.couponCode);
      }
      setCount(count+1)
    }
    return (
      <div className="min-h-screen bg-gray-100">
    
        <header className="bg-yellow-400 p-6 rounded-bl-3xl">
          <div className="md:flex-row gap-4 md:gap-0 flex-col flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold">Welcome To Your Fitness App!</div>
            <div className="flex gap-2 md:gap-0 items-center space-x-4">
              <Link href={"/event"} className="bg-blue-500 text-white px-4 py-2 rounded-full">Events</Link>
              {userType==='buyer' && <button className="bg-green-500 text-white md:px-4 px-2 py-2 rounded-xl md:rounded-full" onClick={handleClick}>Streak {count}</button>}
              {userType==='seller' && <button className="bg-green-500 text-white md:px-4 py-2 rounded-full" onClick={navigateToUpload}>Upload Coupons</button>}
            </div>
            
          </div>
          <div className="mt-4 text-center font-semibold md:font-bold md:text-xl text-lg"> Hi! Emma Simpson</div>
        </header>
        <main className="p-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Track Your Activities</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <img src="/footprint.svg" alt="Steps" className="w-6 h-6 mx-auto" />
                <div className="text-center">DAILY STEPS</div>
                <div className="text-center mt-2">---</div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-full">ENABLE</button>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <img src="/health_heart.svg" alt="Heart Rate" className="w-6 h-6 mx-auto" />
                <div className="text-center">HEART RATE</div>
                <div className="text-center mt-2">---</div>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full">ENABLE</button>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <img src="/drink_.svg" alt="Water Drop" className="w-6 h-6 mx-auto" />
                <div className="text-center">WATER TRACKER</div>
                <div className="text-center mt-2">---</div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-full">ENABLE</button>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <img src="/blood_drop_icon.svg" alt="Blood Drop" className="w-6 h-6 mx-auto" />
                <div className="text-center">CALORIES</div>
                <div className="text-center mt-2">---</div>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full">ENABLE</button>
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Body Score</h2>
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-gray-500">30 June 2018 3:04 pm</div>
              </div>
              <div className="text-right">
                <div className="text-lg">17.1% Body fat</div>
                <div className="text-lg">49.8 Kg Weight</div>
                <div className="text-lg">56.8% Water</div>
              </div>
            </div>
            <div className="text-gray-500">All are going good continue daily walking more than 60 min to maintain your health</div>
          </section>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md flex justify-around">
          <button className="flex flex-col items-center">
            <img src="/home_icon.svg" alt="Home" className="w-6 h-6" />
            <span>Home</span>
          </button>
          <Link href={"/social"} className="flex flex-col items-center" >
          <img src="/social_logo.svg" alt="Social" className="w-6 h-6" /> 
          <span>Social</span>

          </Link>
          <Link href={"/fitshop"} className="flex flex-col items-center">
            <img src="/shopping_icon.svg" alt="FitShop" className="w-6 h-6" />
            <span>FitShop</span>
          </Link>
          <Link href={"/matchup"} className="flex flex-col items-center">
            <img src="/matchup.png" alt="Matchup" className="w-6 h-6" />
            <span>Matchup</span>
          </Link>
          <Link href={"/profile"} className="flex flex-col items-center">
          <img src="/profile_logo.svg" alt="Profile" className="w-6 h-6" />
          <span>Profile</span>
          </Link>
        </footer>
      </div>
    );
  }
