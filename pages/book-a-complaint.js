/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'
const complaint = () => {
  return (
    <div>
      <Banner title={"BOOK A COMPLAINT"} pic={"https://www.okayapower.com/img/inner-banner/website-banners-21.jpg"} />
      <div className='pb-[10vw] '>
        <h1 className='text-[3vw] mb-[8vw] mt-[6vw] underline underline-offset-[1vw] text-orange-500 decoration-gray-600 text-center font-bold'>URJA CARE</h1>

        <section className="text-gray-600 body-font w-full  relative ">
          <div className=" container w-full mx-auto drop-shadow-sm">

            <div className=" md:w-5/6 mx-auto border p-10">
              <div className="flex flex-wrap  -m-2">

                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Registered Mobile No." className="leading-7 text-sm text-gray-600">Registered Mobile No.</label>
                    <input type="Registered Mobile No." id="Registered Mobile No." name="Registered Mobile No." className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Alternate Mobile No." className="leading-7 text-sm text-gray-600">Alternate Mobile No.</label>
                    <input type="Alternate Mobile No." id="Alternate Mobile No." name="Alternate Mobile No." className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Address" className="leading-7 text-sm text-gray-600">Address</label>
                    <input type="Address" id="Address" name="Address" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="State" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="State" id="State" name="State" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="City" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="City" id="City" name="City" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Area" className="leading-7 text-sm text-gray-600">Area</label>
                    <input type="Area" id="Area" name="Area" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Pin Code" className="leading-7 text-sm text-gray-600">Pin Code</label>
                    <input type="Pin Code" id="Pin Code" name="Pin Code" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Complaint Type" className="leading-7 text-sm text-gray-600">Complaint Type</label>
                    <input type="Complaint Type" id="Complaint Type" name="Complaint Type" className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Product Serial No." className="leading-7 text-sm text-gray-600">Product Serial No.</label>
                    <input type="Product Serial No." id="Product Serial No." name="Product Serial No." className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Problem Detail." className="leading-7 text-sm text-gray-600">Problem Detail.</label>
                    <input type="Problem Detail." id="Problem Detail." name="Problem Detail." className="w-1/2  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-3/4">
                  <div className="relative flex gap-[1vw] justify-between">
                    <label for="Remarks" className="leading-7 text-sm text-gray-600">Remarks</label>
                    <textarea id="Remarks" name="Remarks" className="w-2/3  bg-white bg-opacity-50 rounded border border-gray-400 shadow-inner focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default complaint