"use client"
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full container mx-auto lg:h-16 py-3 px-12 relative border-b-2 border-white">
            <div className="inset-x-0 absolute z-50 -bottom-8 h-8  px-12" />
            <div className="mx-auto lg:flex lg:items-center h-full">
                <div className="flex items-center justify-between">
                    <div className="w-56">
                        <Link href={'/'} className=" pl-4 text-xl font-bold">
                            Codestam
                        </Link>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex flex-col md:flex-row items-center lg:justify-end text-center lg:mt-0 h-full gap-8`}
                >
                    <div className=" flex flex-col lg:flex-row gap-4">
                        <button >
                            Become a Seller
                        </button>
                        <button >
                            Explore
                        </button>
                        <button >
                            Blogs
                        </button>
                        <button >
                            Contact
                        </button>
                    </div>

                    <div className="flex justify-center mt-4 lg:mt-0 gap-4 text-white font-bold">
                        <button className="bg-[#1980e5] px-4 py-2 rounded-lg ">
                            <span>Sign in</span>
                        </button>
                        <button className="bg-[#243647] px-4 py-2 rounded-lg">
                            <span>Sign up</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
