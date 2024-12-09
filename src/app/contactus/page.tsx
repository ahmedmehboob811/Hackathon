"use client"
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

export default function contact(){
    return(
        <>
  <Link href="/"></Link>
{/* //navabr */}
<div className="bg-slate-700 flex justify-center h-10 text-white md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto pt-2 gap-2">
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

{/* Hero Section */}
<div className="h-24 bg-slate-200 text-2xl flex justify-between pl-40 md:pl-20 sm:pl-10">
  <p className="flex mt-6 text-4xl gap-2"><GiSofa />Comforty</p>

  <div className="flex gap-2 mr-20 mt-4 bg-slate-50 rounded-xl h-12 w-32 pl-2 md:w-28 sm:w-24">
    <div className="mt-3"><IoCartOutline /></div>
    <p className="mt-2 ">cart</p>
    <div className="mt-3 "><TbCircleNumber2Filled /></div>
  </div>
</div>

{/* List Section */}
<div className="flex justify-between md:flex-col sm:flex-col">
  <div className="flex mt-8 ml-40 gap-3 md:ml-10 sm:ml-5">
    <p className="text-emerald-500">Home</p>
    <p>Shop</p>
    <p>Product</p>
    <p>Pages</p>
    <Link href="./about">About</Link>
  </div>
  <p className="mt-8 mr-20 md:mr-10 sm:mr-5">Contact:(808) 555-0111</p>
</div>

{/* Contact Section */}
<div className="container mx-auto p-4 pt-6 mt-6 md:p-6 lg:p-8">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-4">Address: 123 Main St, Lahore, Pakistan</p>
      <p className="text-gray-600 mb-4">Phone: +92 123 456 789</p>
      <p className="text-gray-600 mb-4">Working Time: Mon - Fri, 9am - 5pm</p>
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
      <form>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
            <label className="block text-gray-600 mb-2" htmlFor="name">Name:</label>
            <input className="block w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">Email:</label>
            <input className="block w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="subject">Subject:</label>
          <input className="block w-full p-2 border border-gray-300 rounded" type="text" id="subject" name="subject" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="message">Message:</label>
          <textarea className="block w-full p-2 border border-gray-300 rounded" id="message" name="message" ></textarea>
        </div>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</div>

{/* Footer Section */}
<footer className="mt-2 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between md:flex-col sm:flex-col">
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0">
        <h5 className="text-4xl font-bold mb-2 flex gap-1"><GiSofa />Comforty</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem quia aliquam molestias volu</p>
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
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0">
        <h5 className="text-xl font-bold mb-2">Category</h5>
        <ul>
          <li className="mb-2">
            <Link href="#">
              sofa
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#">
              Armchair
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#">
              Wing Chair
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#">
              Desk Chair
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4 mb-4 md:mb-0">
        <h5 className="text-xl font-bold mb-2">Support</h5>
        <ul>
          <li className="mb-2">
            <Link href="#">
              Help & Support
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#">
              FAQs
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#">
              Terms & Condition
            </Link>
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
    )
}