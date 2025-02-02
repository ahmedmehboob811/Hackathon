"use client";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { CiCircleAlert } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Faqs from "./faqs/page";
import { FaYoutube } from "react-icons/fa";
import about from "./aboutus/page";
import contact from "./contactus/page";

import Image from "next/image";
import { TbCircleNumber2Filled } from "react-icons/tb";
export default function Navbar() {
  return (
    <>
      {/* //navabr */}
      <div className="bg-slate-700 flex justify-center h-10 text-white pt-2 gap-2 grid sm:grid-cols-1 xl:grid-cols-4">
  <div className="flex mt-1">
    <TiTick />
  </div>
  <div className=" ">Free Shipping On All Orders Over $50</div>
  <div className="ml-56">Eng</div>
  <div className="flex mt-1">
    <FaAngleDown />
  </div>
  <a href="./faqs" className="">Faqs</a>
  <div className="flex mt-1">
    <CiCircleAlert />
  </div>
  <div className="">Need Help</div>
</div>

<div className="h-24 bg-slate-200 text-2xl flex justify-between pl-40">
  <p className="flex mt-6 text-4xl gap-2">
    <GiSofa />
    Comforty
  </p>
  
  <div className="flex gap-2 mr-20 mt-4 bg-slate-50 rounded-xl h-12 w-32 pl-2 ">
    <div className="mt-3">
      <IoCartOutline />
    </div>
    <p className="mt-2">cart</p>
    <div className="mt-3">
      <TbCircleNumber2Filled />
    </div>
  </div>
</div>
<div className="flex justify-between ">
  <div className="flex mt-8 ml-40 gap-3">
    <p className="text-emerald-500">Home</p>
    <p>Shop</p>
    <p>Product</p>
    <p>Pages</p>
    <a href="./aboutus">About</a>
  </div>
  <span className="mt-8 mr-20">
    <a href="./contactus">Contact:(808) 555-0111</a>
  </span>
</div>
<div className="ml-56 mt-8 ">
  <img src="/Header.png" width={800} height={450} alt="./public/Header.png" className="md:w-3/5 sm:w-4/5" />
</div>

<div className="ml-56 mt-8 ">
  <img src="/Company Logo.png" width={800} height={450} alt="./public/Company Logo.png" className="md:w-3/5 sm:w-4/5" />
</div>

<div className="ml-38 pl-6 mt-8 ">
  <img src="/Featured Products.png" width={1200} height={500} alt="./public/Featured Products.png" className="md:w-4/5 sm:w-5/5" />
</div>

<div className="ml-38 pl-6 mt-8 ">
  <img src="/Top Categotires.png" width={1200} height={500} alt="./public/Top Categotires.png" className="md:w-4/5 sm:w-5/5" />
</div>

<div className="ml-56 mt-12 ">
  <img src="/hot-category.png" width={800} height={450} alt="./public/hot category.png" className="md:w-3/5 sm:w-4/5" />
</div>

<div className="ml-56 mt-12 ">
  <img src="/Our Products.png" width={800} height={450} alt="./public/Our Products.png" className="md:w-3/5 sm:w-4/5" />
</div>



<footer className="mt-2 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between md:flex-nowrap sm:flex-nowrap">
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0 sm:mb-0">
        <h5 className="text-4xl font-bold mb-2 flex gap-1">
          <GiSofa />
          Comforty
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem
          quia aliquam molestias volu
        </p>
        <ul className="flex justify-start mb-4 mt-4">
          <li className="mr-4">
            <Link href="#">
              <FaFacebook size={24} />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <FaTwitter size={24} />
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#">
              <FaInstagram size={24} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0 sm:mb-0">
        <h5 className="text-xl font-bold mb-2">Category</h5>
        <ul>
          <li className="mb-2">
            <Link href="#">sofa</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Armchair</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Wing Chair</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Desk Chair</Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0 sm:mb-0">
        <h5 className="text-xl font-bold mb-2">Support</h5>
        <ul>
          <li className="mb-2">
            <Link href="#">Help & Support</Link>
          </li>
          <li className="mb-2">
            <Link href="#">FAQs</Link>
          </li>
          <li className="mb-2">
            <Link href="#">Terms & Condition</Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <h5 className="text-xl font-bold mb-2">NEWSLETTER</h5>

        <div className="flex flex-wrap justify-start mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-1/2 xl:w-1/2 py-2 pl-10 text-sm text-gray-700"
          />
          <button
            type="submit"
            className="w-full md:w-1/2 xl:w-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
