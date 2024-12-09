import Link from "next/link"
import { TiTick } from "react-icons/ti";
import { CiCircleAlert } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbCircleNumber2Filled } from "react-icons/tb";

import { FaYoutube } from "react-icons/fa";
export default function Faqs(){
    return(    
    <>


    <Link href="/"></Link>
  

<div className="bg-slate-700  flex justify-center h-10 text-white  mx-auto pt-2  gap-2 ">
  <div className="flex mt-1">
    <TiTick />
  </div>
  <div className=""> Free Shipping On All Orders Over $50</div>
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
  <p className="flex mt-6 text-4xl gap-2">
    <GiSofa />
    Comforty
  </p>

  <div className="flex gap-2 mr-20 mt-4  bg-slate-50 rounded-xl h-12 w-32 pl-2 md:w-28 sm:w-24">
    <div className="mt-3">
      <IoCartOutline />
    </div>
    <p className="mt-2 ">cart</p>
    <div className="mt-3 ">
      <TbCircleNumber2Filled />
    </div>
  </div>
</div>

{/* List Section */}
<div className="flex justify-between ">
  <div className="flex mt-8 ml-40 gap-3 ">
    <p className="text-emerald-500">Home</p>
    <p>Shop</p>
    <p>Product</p>
    <p>Pages</p>
    <Link href="./about">About</Link>
  </div>
  <p className="mt-8 mr-20 md:mr-10 sm:mr-5">Contact:(808) 555-0111</p>
</div>

{/* FAQ Section */}
<div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
  <h1 className="text-4xl font-semibold mb-6 text-center">Questions Look Here</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti in corporis modi, br bbrebe </p>
</div>

{/* FAQ Details Section */}
<div className="flex flex-wrap lg:flex-nowrap justify-center">
  <div className="w-full lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8">
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">What is Ecommerce?</h3>
      <p className="text-gray-600">
        Ecommerce refers to the buying and selling of goods and services over the internet. 
        It has become a popular way for businesses to reach customers and for customers to shop from the comfort of their own homes.
        Ecommerce has also enabled businesses to operate globally.
      </p>
    </div>
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">What are the benefits of Ecommerce?</h3>
      <p className="text-gray-600">
        Ecommerce provides several benefits to businesses and customers, including increased convenience, 
        lower costs, and a wider reach. 
        It also enables businesses to operate 24/7 and to process transactions quickly and efficiently.
      </p>
    </div>
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">How does Ecommerce work?</h3>
      <p className="text-gray-600">
        Ecommerce typically involves an online store or platform where customers can browse and purchase products. 
        The store may use a shopping cart system to allow customers to select and purchase multiple items at once. 
        Once an order is placed, the store will typically process the payment and ship the products to the customer.
      </p>
    </div>
  </div>
  <div className="w-full lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-8">
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">What are the different types of Ecommerce?</h3>
      <p className="text-gray-600">
        There are several types of ecommerce, including business-to-consumer (B2C), 
        business-to-business (B2B), and consumer-to-consumer (C2C) ecommerce. 
        Each type of ecommerce involves different types of transactions and relationships between businesses and customers.
      </p>
    </div>
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">What are the security concerns with Ecommerce?</h3>
      <p className="text-gray-600">
        Ecommerce security concerns include the risk of hacking, 
        data breaches, and identity theft. 
        To mitigate these risks, ecommerce sites should use secure payment gateways, 
        encrypt sensitive data, and implement strong password policies.
      </p>
    </div>
    <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-8 mb-4">
      <h3 className="text-lg font-bold mb-2">What is the future of Ecommerce?</h3>
      <p className="text-gray-600">
        The future of ecommerce is likely to involve increased use of artificial intelligence, 
        augmented reality, and the Internet of Things (IoT). 
        These technologies will enable businesses to provide more personalized and immersive shopping experiences.
      </p>
    </div>
  </div>
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
    )
}