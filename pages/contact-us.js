/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Banner from '../components/Banner'
import { IoLocationSharp } from "react-icons/io5"
import { MdWifiCalling3 } from "react-icons/md"
import { IoMdMail } from "react-icons/io"
import ClipLoader from "react-spinners/ClipLoader";
const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [submitted, setsubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, email, phone, message }
        console.log('sending')
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setsubmitted(true)
                setname('')
                setemail('')
                setphone('')
                setmessage('')
            }
            setTimeout(() => {
                setsubmitted(false)
            }, 2000);
        })
    }
    return (
        <div className='mt-[8vh] md:mt-[6.9vw]   bg-gray-100 text-gray-700'>

            <Banner pic="/businessman-touching-virtual-screen.jpg" title="CONTACT US" />
            <div className='relative mx-6 md:mx-0'>
                <img className='absolute opacity-0 md:opacity-10 grayscale h-full object-cover' src='/background.jpg' alt='background' />
                <div className='pt-20 w-fit mx-auto text-center'>
                    <h1 className='text-3xl md:text-4xl mb-10 text-orange-500 font-bold '>URJA <span className='md:border-b-4 pb-2 border-gray-600 '>GLOBAL</span> LIMITED</h1>
                    <p className='text-lg md:text-xl font-semibold tracking-wider leading-relaxed'>URJA GLOBAL LIMITED IS IN ONE OF INDIA&apos;S LEADING RENEWABLE ENERGY DEVELOPERS</p>
                </div>
                <div className='flex  gap-10 flex-col md:w-[70rem] mt-14  mx-auto'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='p-10 bg-white font-medium drop-shadow md:w-[45%]'>
                            <h1 className='font-bold text-xl'>Registered Office</h1>
                            <div className='flex items-center my-6'>
                                <IoLocationSharp className='w-12  mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div className='w-4/5'>
                                    <h1 className='font-semibold mb-1'>URJA GLOBAL LIMITED</h1>
                                    <p className='text-sm font-sans'>487/63, 1st Floor, National Market,Peeragarhi, New Delhi-110087</p>
                                </div>
                            </div>
                            <div className='flex items-center my-6'>
                                <IoLocationSharp className='w-12  mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div className='w-4/5'>
                                    <h1 className='font-semibold mb-1'>URJA INCUBATION/ TRAINING CENTER</h1>
                                    <p className='text-sm font-sans'>487/63, 1st Floor, National Market,Peeragarhi, New Delhi-110087</p>
                                </div>
                            </div>
                            <h1 className='font-bold pt-4 text-gray-700 text-xl'>Contact Us</h1>
                            <div className='flex items-center my-6'>
                                <MdWifiCalling3 className='w-12  mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div className='w-4/5'>
                                    <h1 className='font-semibold mb-1'>GENERAL ENQUIRIES</h1>
                                    <p className='text-sm font-sans'>+91-11-25279143 | +91-11-45588274</p>
                                </div>
                            </div>
                            <div className='flex items-center my-6'>
                                <MdWifiCalling3 className='w-12  mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div className='w-4/5'>
                                    <h1 className='font-semibold mb-1'>TOLL FREE NO.</h1>
                                    <p className='text-sm font-sans'>8000-500-789</p>
                                </div>
                            </div>
                            <div className='flex items-center my-6'>
                                <IoMdMail className='w-12  mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div className='w-4/5'>
                                    <h1 className='font-semibold mb-1'>EMAIL ADRESS FOR ONLINE SUPPORT</h1>
                                    <p className='text-sm font-sans'>info@urjaglobal.in</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 md:p-12 md:w-[55%] bg-white font-medium drop-shadow'>
                            <h1 className=' font-bold text-xl'>Enquiry Now !</h1>
                            {submitted ?
                                <div className='flex justify-center items-center w-full h-full mx-auto'><ClipLoader
                                    color="orange"
                                    loading={submitted}
                                    size={150}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                /></div> : <form className='flex flex-col space-y-4 my-10'>
                                    <div className='flex flex-col'>
                                        <label>Name</label>
                                        <input value={name} onChange={(e) => setname(e.target.value)} className='bg-gray-100 border border-gray-300 p-1' type="text"></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Email</label>
                                        <input value={email} onChange={(e) => setemail(e.target.value)} className='bg-gray-100 border border-gray-300 p-1' type="email"></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Mobile No.</label>
                                        <input value={phone} onChange={(e) => setphone(e.target.value)} className='bg-gray-100 border border-gray-300 p-1' type="number"></input>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Message</label>
                                        <textarea value={message} onChange={(e) => setmessage(e.target.value)} className='bg-gray-100 border h-24 border-gray-300 p-1' ></textarea>
                                    </div>


                                </form>}
                            <button onClick={(e) => handleSubmit(e)} className='self-start mt-6 text-white font-medium  bg-orange-500 rounded-full border border-black px-4 py-1'>Submit</button>
                        </div>
                    </div>
                    <div className='p-5 md:p-12 drop-shadow font-medium   bg-white'>
                        <h1 className='text-xl w-fit mx-auto font-bold'>For Grievances/ Investor Communications</h1>
                        <p className='mx-auto w-fit text-lg'>COMPANY SECRETARY</p>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-6'>
                            <div className='flex items-center'>
                                <IoMdMail className='w-10 mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div>
                                    <h1 className='font-semibold mb-1'>EMAIL ID FOR SECRETARY</h1>
                                    <p className='text-sm font-sans'>cs@urjaglobal.in</p>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <IoMdMail className='w-10 mr-6 border rounded-full border-gray-500 p-1 text-orange-500 h-auto' />
                                <div>
                                    <h1 className='font-semibold mb-1'>EMAIL ID FOR CAREERS</h1>
                                    <p className='text-sm font-sans'>hr@urjaglobal.int</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-14 object-cover'>
                    <img className='w-full' src='https://img.staticmb.com/mbphoto/locality/original_images/2021/Dec/24/53197_MAP.png' alt='map' />
                </div>
            </div>
        </div>
    )
}

export default Contact