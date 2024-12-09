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

import { FaYoutube } from "react-icons/fa";

import Image from "next/image";
import { TbCircleNumber2Filled } from "react-icons/tb";

export default function about() {
  return (
    <>
      <Link href="/"></Link>
      {/* //navabr */}
      {/* <!-- Responsive design using Tailwind CSS --> */}

{/* <!-- Header Section --> */}
<div className="bg-slate-700 flex justify-center h-10 text-white  mx-auto pt-2 gap-2">
  <div className="flex mt-1">
    <TiTick />
  </div>
  <div className="hidden sm:block"> Free Shipping On All Orders Over $50</div>
  <div className="ml-56 md:ml-20 sm:ml-10">Eng</div>
  <div className="flex mt-1">
    <FaAngleDown />
  </div>
  <Link href="./faqs" className="hidden sm:block">Faqs</Link>
  <div className="flex mt-1">
    <CiCircleAlert />
  </div>
  <div className="hidden sm:block">Need Help</div>
</div>

{/* <!-- Hero Section --> */}
<div className="h-24 bg-slate-200 text-2xl flex justify-between pl-40 ">
  <p className="flex mt-6 text-4xl gap-2">
  <GiSofa />
    Comforty
  </p>

  <div className="flex gap-2 mr-20 mt-4 bg-slate-50 rounded-xl h-12 w-32  pl-2">
    <div className="mt-3">
      <IoCartOutline />
    </div>
    <p className="mt-2">cart</p>
    <div className="mt-3">
      <TbCircleNumber2Filled />
    </div>
  </div>
</div>

{/* <!-- Navigation Section --> */}
<div className="flex justify-between ">
  <div className="flex mt-8 ml-40 gap-3 md:ml-10 sm:ml-5">
    <p className="text-emerald-500">Home</p>
    <p>Shop</p>
    <p>Product</p>
    <p>Pages</p>
    <Link href="./about">About</Link>
  </div>
  <p className="mt-8 mr-20 md:mr-10 sm:mr-5">Contact:(808) 555-0111</p>
</div>

{/* <!-- About Section --> */}
<div className="flex mt-8 ml-28 flex-wrap ">
  <div className="max-w-md mx-auto bg-green-600 text-white rounded-lg shadow-md p-6 ">
    <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
      amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
      natopecious natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </p>
  </div>
  <div className="w-full  mb-4  sm:mb-0">
    <Image
      src="/chair.png"
      alt="Chair"
      width={200}
      height={100}
      className="rounded-lg"
    />
  </div>
</div>

{/* <!-- Features Section --> */}
<div className="flex justify-between m-4 mt-24 flex-wrap md:flex-nowrap sm:flex-nowrap">
  <div className="bg-gray-300 rounded-lg p-4 mt-4 text-center h-32 md:w-1/4 sm:w-1/2">
    <h3 className="text-lg font-bold">Next Day Delivery</h3>
    <p className="text-emerald-600">Lorem ipsum dolor sit amet.</p>
  </div>
  <div className="bg-gray-300 rounded-lg p-4 text-center md:w-1/4 sm:w-1/2">
    <h3 className="text-lg font-bold">Secure Payment</h3>
    <p className="text-emerald-600">Consectetur adipiscing elit sed.</p>
  </div>
  <div className="bg-gray-300 rounded-lg p-4 text-center md:w-1/4 sm:w-1/2">
    <h3 className="text-lg font-bold">Best Quality Products</h3>
    <p className="text-emerald-600">Sed sit amet nulla auctor vestibulum.</p>
  </div>
  <div className="bg-gray-300 rounded-lg p-4 text-center md:w-1/4 sm:w-1/2">
    <h3 className="text-lg font-bold">30 Days Return Policy</h3>
    <p className="text-emerald-600">Magna sed convallis ex cum sociis.</p>
  </div>
</div>

{/* <!-- Popular Products Section --> */}
<div className="container mx-auto p-4 mt-10">
  <h2 className="text-3xl font-bold mb-4">Popular Products</h2>
  <div className="flex flex-wrap justify-between">
    <div className="w-full   mb-4 ">
      <Image
        src="/sofa.png"
        alt="Sofa"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <p className="text-lg font-bold mt-2">Sofa</p>
      <p className="text-lg font-bold mt-2">$500</p>
    </div>
    <div className="w-full   mb-4 ">
      <Image
        src="/chair.png"
        alt="Chair"
        width={200}
        height={100}
        className="rounded-lg"
      />
      <p className="text-lg font-bold mt-2">Chair</p>
      <p className="text-lg font-bold mt-2">$200</p>
    </div>
    <div className="w-full   mb-4 ">
      <Image
        src="/chair.png"
        alt="Chair"
        width={200}
        height={100}
        className="rounded-lg"
      />
      <p className="text-lg font-bold mt-2">Chair</p>
      <p className="text-lg font-bold mt-2">$250</p>
    </div>
  </div>
</div>

{/* <!-- Footer Section --> */}


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
