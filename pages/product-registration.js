/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'
const Product = () => {
  return (
    <div>
      <Banner  pic={"/pr.jpg"} />
      <div className='pb-[10vw] '>
        <h1 className='text-3xl md:text-[3vw] mb-[8vh] md:mb-[8vw] mt-[6vh] md:mt-[6vw] border-b-2 md:border-b-4 pb-3 mx-auto w-fit text-orange-500 border-orange-500 text-center font-bold'>URJA CARE</h1>

        <section className="text-gray-800 font-semibold body-font w-full ">
          <div className=" container w-full md:mx-auto drop-shadow-sm">

            <div className="md:w-5/6 w-[90%] mx-auto border p-5 md:p-10">
              <div className="flex flex-col md:flex-row flex-wrap -m-2">

                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="name" className="leading-7 text-sm text-gray-800">Name</label>
                    <input type="text" id="name" name="name" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="email" className="leading-7 text-sm text-gray-800">Email</label>
                    <input type="email" id="email" name="email" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Mobile No." className="leading-7 text-sm text-gray-800">Mobile No.</label>
                    <input type="Mobile No." id="Mobile No." name="Mobile No." className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Select Order Source" className="leading-7 text-sm text-gray-800">Select Order Source</label>
                    <input type="Select Order Source" id="Select Order Source" name="Select Order Source" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Invoice No." className="leading-7 text-sm text-gray-800">Invoice No.</label>
                    <input type="Invoice No." id="Invoice No." name="Invoice No." className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Invoice Date" className="leading-7 text-sm text-gray-800">Invoice Date</label>
                    <input type="Invoice Date" id="Invoice Date" name="Invoice Date" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Address" className="leading-7 text-sm text-gray-800">Address</label>
                    <input type="Address" id="Address" name="Address" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="State" className="leading-7 text-sm text-gray-800">State</label>
                    <input type="State" id="State" name="State" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="City" className="leading-7 text-sm text-gray-800">City</label>
                    <input type="City" id="City" name="City" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Area" className="leading-7 text-sm text-gray-800">Area</label>
                    <input type="Area" id="Area" name="Area" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Pin Code" className="leading-7 text-sm text-gray-800">Pin Code</label>
                    <input type="Pin Code" id="Pin Code" name="Pin Code" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Product" className="leading-7 text-sm text-gray-800">Product</label>
                    <input type="Product" id="Product" name="Product" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Product Serial No." className="leading-7 text-sm text-gray-800">Product Serial No.</label>
                    <input type="Product Serial No." id="Product Serial No." name="Product Serial No." className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Product Code." className="leading-7 text-sm text-gray-800">Product Code.</label>
                    <input type="Product Code." id="Product Code." name="Product Code." className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 md:w-1/2">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="select Category" className="leading-7 text-sm text-gray-800">select Category</label>
                    <input type="select Category" id="select Category" name="select Category" className="md:w-1/2 bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 md:w-3/4">
                  <div className="relative flex flex-col md:flex-row justify-between">
                    <label for="Remarks" className="leading-7 text-sm text-gray-800">Remarks</label>
                    <textarea id="Remarks" name="Remarks" className="md:w-2/3 bg-white bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex flex-col md:flex-row mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-base">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product