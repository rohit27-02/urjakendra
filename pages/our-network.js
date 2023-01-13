/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const Network = () => {
    const stores = [{title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
    {title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
    {title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
    {title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
    {title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
    {title:"GUPTA ENTERPRISES",address:"A-3/260 SEC-36 ROHINI DELHI"},
]
    return (
        <div className='mt-[6.9vw]'>
            <Banner pic={"https://www.evereadyindia.com/wp-content/uploads/2022/01/29145401/locations-tab.jpg"} title="OUR NETWORK"/>
            <div>
                <div>
                    <h1 className='text-4xl mb-[4vw] mt-[6vw] border-b-4 border-orange-500 pb-3 w-fit mx-auto text-orange-500 decoration-gray-600 text-center font-bold '>STORE LOCATION</h1>
                </div>
                <section className="text-gray-800 font-semibold body-font">
                    <div className="container px-5 mx-auto">

                        <div className="flex lg:w-5/6 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label for="pincode" className="leading-7 text-sm text-gray-800">Your Location/Pincode</label>
                                <input type="text" id="pincode" name="pincode" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="radius" className="leading-7 text-sm text-gray-800">Search Radius</label>
                                <input type="text" id="radius" name="radius" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="result" className="leading-7 text-sm text-gray-800">Result</label>
                                <input type="result" id="result" name="result" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Submit</button>
                        </div>
                    </div>
                </section>
                <div className='w-full flex justify-between py-[2vw] px-[5vw] h-[80vh]'>
                    <div className='w-[30%] h-[70vh] overflow-y-scroll'>
                        {
                            stores.map((store)=>{
                                return <div className='font-semibold bg-gray-100 m-[1vw] p-[1vw] ' key={store.title}>
                                     <h1 className=' text-xl text-orange-500'>{store.title}</h1>
                                     <p className='mt-[0.5vw] mb-[1vw]'>{store.address}</p>
                                     <button>Directions</button>
                                </div>
                            })
                        }
                    </div>
                    <div className='w-4/6'>
                        <img src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg' alt='map'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network