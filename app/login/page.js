"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Page = ({params}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()
  const handleSubmit = async (e) => {
  try{
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/signin`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders,
      });
      const res = await response.json();
    
      if (res.status === 200) {
        alert("Login Successful!");
        router.push(`/homepage/${email}`)
      } else {
        alert("Login Failed!");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
    
  }

    catch(e){
      console.log(e.message);
    }

      // Reset form fields after submission
  };

  return (
    <div
      style={{
        backgroundImage: `url('/loginSignUp.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="min-w-[30%] mx-auto bg-black p-8 rounded-xl bg-gradient-to-r from-black to-blue-900"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>

        </div>


        <button type="submit" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-400"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Submit</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
      </form>
    
    </div>
  );
};

export default Page;
