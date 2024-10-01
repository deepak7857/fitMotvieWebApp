'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    const products = [
        { category: "GymSupplements", title: "Optimum Nutrition", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "protin_1.jpg" },
        { category: "GymSupplements", title: "HK Vitals", description: "HealthKart HK Vitals Assorted Multivitamin - Fish Oil (30N tabs+ 30N Softgel caps), 2 Piece(s)/Packe", imgSrc: "protin_2.jpg" },
        { category: "GymSupplements", title: "HK Vitals", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "protin_3.jpg" },
        { category: "GymSupplements", title: "MuscleBlaze", description: "MuscleBlaze Creatine Monohydrate CreAMP, 100 g (0.22 lb", imgSrc: "protin_4.jpg" },
        { category: "GymSupplements", title: "Fashnex Resistance Bands Set", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "protin_5.jpg" },
        { category: "Protein", title: "Shooting Stars", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "protin_6.jpg" },
        { category: "Protein", title: "Shooting Stars", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "protin_7.jpg" },
        { category: "Protein", title: "Shooting Stars", description: "Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs/907 g) (Double Rich Chocolate) Protein Powder for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate", imgSrc: "gym_1.webp" },
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((product, index) => (
                        <div key={index} className="lg:w-1/4 h-[65vh] relative  md:w-1/2 p-4 w-full border-8">
                            <a className="block relative h-48 rounded overflow-hidden border-4 border-black-300  ">
                                <img alt="ecommerce" className="object-contain object-center w-full h-full block " src={product.imgSrc} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                <p className="mt-1">{product.description}</p>
                                <button onClick={() => router.push('/fitshop/product')} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 absolute bottom-0">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page