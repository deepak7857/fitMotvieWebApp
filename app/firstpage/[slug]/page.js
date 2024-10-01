"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
const Page = ({params}) => {
  const router=useRouter()
  const [age,setAge]=useState("");
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [gender,setGender]=useState("");
  const [medCondn,setMedCondn]=useState("");
  const handleSubmit = async (e) => {
  try{
    const email=params.slug
    e.preventDefault();
    const data = {
      email,age,height,weight,gender,medCondn
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/firstpage/${params.slug}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders,
      });
      const res = await response.json();
    
      if (res.success === true) {
        alert("Signup Successful!");
        router.push(`/homepage/${params.slug}`);
      } else {
        alert("Signup Failed!");
      }
      setAge("");
      setHeight("");
      setWeight("");
      setGender("");
      setMedCondn("");
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
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="max-w-md mx-auto bg-black p-8 rounded-xl bg-gradient-to-r from-black to-blue-900"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="age"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Age
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="height"
            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Height
          </label>
        </div>

        <div className="grid mt-8 mb-5 md:grid-cols-2 md:gap-6">
        <select
  className="bg-transparent text-white cursor-pointer border-b-2 border-gray-300"
  name="gender"
  id="gender"
  value={gender} // Control the selected value with state
  onChange={(e) => setGender(e.target.value)}
  required
>
  <option value="" disabled>
    Select Gender
  </option>
  <option className="text-black" value="Male">
    Male
  </option>
  <option className="text-black" value="Female">
    Female
  </option>
  <option className="text-black" value="Other">
    Other
  </option>
</select>

<div className="flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="weight"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="weight"
              className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Weight
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="medCondn"
              id="medCondn"
              value={medCondn}
              onChange={(e) => setMedCondn(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="medCondn"
              className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Medical Condition
            </label>
          </div>
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
