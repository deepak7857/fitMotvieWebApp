import Link from "next/link";

export default function Home() {
  return (
  <div>
    <div
      style={{
        backgroundImage: `url('/welcome.jpg')`, 
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        // opacity:0.8
      }}
    >
    <div className="md:text-8xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-600">We are FitMotive</div>
    <div className="md:text-5xl text-2xl text-center mt-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">Push Limits,Build Strength, Conquer Yourself</div>
    <Link href={"./SignUpLogin"}>
    <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium px-5 py-2.5 text-center me-2 mb-2 mt-10 text-4xl rounded-3xl">Welcome</button></Link>
    </div>
    
  </div>
  );
}