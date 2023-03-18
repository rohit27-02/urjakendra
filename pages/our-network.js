/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const Network = () => {
    const stores = [
        {
         "URJA KENDRA LIST": 1,
         "name": "Vyapar Udyog Prakisthan",
         "address": "Prakisthan Building, Opp.  Godown no 4 Bais Godam, jaipur, Rajasthan, 302006",
         "phone": 9829062991
        },
        {
         "URJA KENDRA LIST": 2,
         "name": "Shri Shyam Motors",
         "address": "Arihant Tower, Near Pioneer Hospital Station Road , Sikar, Rajasthan- 332001",
         "phone": 8112201562
        },
        {
         "URJA KENDRA LIST": 3,
         "name": "Jai Ambay Traders ",
         "address": "Shri Krishna Temple, near Bypass Road,  Madrela Road, Chirawa Dist., Jhunjhunu, Rajasthan- 333026",
         "phone": 7691010739
        },
        {
         "URJA KENDRA LIST": 4,
         "name": "Shri Dev Automobile",
         "address": "171\/298, Haldi Ghati Marg, Sector- 17, Pratap Nagar, Sanganer, Jaipur, Rajasthan- 302033",
         "phone": 8209739506
        },
        {
         "URJA KENDRA LIST": 5,
         "name": "Exideplus Lubricant Private Limited ",
         "address": "01, ward No.8, Radawas, Main Bus Stand, Jaipur, Rajasthan, 302016",
         "phone": 9610010166
        },
        {
         "URJA KENDRA LIST": 6,
         "name": "Saraj Motors",
         "address": "B-A Plot No.- 130, Bhai Vihar, Losal- 332025",
         "phone": 9928341052
        },
        {
         "URJA KENDRA LIST": 7,
         "name": "Shri Shyam Motors",
         "address": "Saraf Complex, Sakadi Gali, Poddar Bhawan, bagi Gate , Fatehpur- 332301",
         "phone": 7691010739
        },
        {
         "URJA KENDRA LIST": 8,
         "name": "Alutech",
         "address": "C- 22\/ 23 Kabir Road, Varanasi, uttar Pradesh- 221001",
         "phone": 9793220006
        },
        {
         "URJA KENDRA LIST": 9,
         "name": "Sharma Traders",
         "address": "Begam Pura, Meerut, Uttar Pradesh",
         "phone": 9548504003
        },
        {
         "URJA KENDRA LIST": 10,
         "name": "Zaffar Brothers",
         "address": "Barabanti, Uttar Pradesh",
         "phone": 8851408004
        },
        {
         "URJA KENDRA LIST": 11,
         "Column2": "Shri Laxmi Narayan Enterprises",
         "Column3": "Sitapur, Uttar Pradesh"
        },
        {
         "URJA KENDRA LIST": 12,
         "name": "Alutech",
         "address": "52E\/ 2A\/ 42, Tashkand Marg, Civil Lines, Pyaragraj, Uttar Pradesh- 211001",
         "phone": 9820199461
        },
        {
         "URJA KENDRA LIST": 13,
         "name": "Hindon Traders",
         "address": "169, Sanjay Colony, Arthala, Mohan Nagar, Ghaziabad, 201007",
         "phone": 8743097773
        },
        {
         "URJA KENDRA LIST": 14,
         "Column2": "One Plus Mobility",
         "Column3": "210, Arunachal Building, Ghaziabad"
        },
        {
         "URJA KENDRA LIST": 15,
         "name": "Loodo Ventures Pvt. Ltd.",
         "address": "JNC Plot No.6, Sector- 5, Vaishali- 110025",
         "phone": 9871812666
        },
        {
         "URJA KENDRA LIST": 16,
         "name": "Shree Motors",
         "address": "A\/P Dudhgaon, Tal- miraj,Sangali, Maharashtra- 416316",
         "phone": 9028434465
        },
        {
         "URJA KENDRA LIST": 17,
         "name": "Mansa Automobile",
         "address": "1\/1\/1  Plot 1, behind Jyoti farm, Opposite Essar Petrol pump, Kadambvan Society, Ambad Link Road, Nashik, Maharashtra- 422007",
         "phone": 8888322402
        },
        {
         "URJA KENDRA LIST": 18,
         "name": "Manakkunel Green Ventures",
         "address": "13\/ 113, 114, Kagingada chethipuzha kottayam, Kerala- 32",
         "phone": 9947033644
        },
        {
         "URJA KENDRA LIST": 20,
         "name": "Shri ram Enterprises ",
         "address": " JP Chowk Jai Prakash Nagar, Siwan, Bihar- 841226",
         "phone": 6299260958
        },
        {
         "URJA KENDRA LIST": 21,
         "name": "Stom Electric",
         "address": "Bargarh, Brahmabihar, near Ram Mandir goru market road, Odisha- 768028",
         "phone": 9031064297
        }
       ]
    return (
        <div className='mt-[8vh] md:mt-[6.9vw]'>
            <Banner pic={"https://www.evereadyindia.com/wp-content/uploads/2022/01/29145401/locations-tab.jpg"} title="OUR NETWORK" />
            <div>
                <div>
                    <h1 className='text-3xl md:text-4xl mb-[4vh] md:mb-[4vw] mt-[6vh] md:mt-[6vw] border-b-2 md:border-b-4 border-orange-500 pb-3 w-fit mx-auto text-orange-500 decoration-gray-600 text-center font-bold '>STORE LOCATION</h1>
                </div>
                <section className="text-gray-800 font-semibold body-font">
                    <div className="container px-5 mx-auto">

                        <div className="flex lg:w-5/6 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label for="pincode" className="leading-7 text-sm text-gray-800">Your Pincode</label>
                                <input type="text" id="pincode" name="pincode" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="radius" className="leading-7 text-sm text-gray-800">Search Radius</label>
                                <input type="text" id="radius" name="radius" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            {/* <div className="relative flex-grow w-full">
                                <label for="result" className="leading-7 text-sm text-gray-800">Result</label>
                                <input type="result" id="result" name="result" className="w-full bg-white shadow-inner bg-opacity-50 rounded border border-gray-400 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div> */}
                            <button className="text-white text-sm  max-[600px]:self-start bg-orange-500 border-0 md:py-2 px-6 py-2 md:px-8 focus:outline-none hover:bg-orange-600 rounded md:text-lg">Submit</button>
                        </div>
                    </div>
                </section>
                <div className='w-full flex md:flex-row flex-col justify-between py-[2vh] md:py-[2vw] px-[5vw] h-[80vh]'>
                    <div className='md:w-[30%] h-[70vh] overflow-y-scroll'>
                        {
                            stores.map((store) => {
                                return <div className='font-semibold bg-gray-100 m-2 md:m-[1vw] p-2 md:p-[1vw] ' key={store.title}>
                                    <h1 className='text-lg md:text-xl text-orange-500'>{store.name}</h1>
                                    <p className='text-sm md:text-base mt-[0.5vw] mb-[1vw]'>{store.address}</p>
                                    {/* <button className='font-sans'>{store.phone}</button> */}
                                </div>
                            })
                        }
                    </div>
                    <div className='md:w-4/6 mt-4 md:mt-0'>
                        <img src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg' alt='map' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network