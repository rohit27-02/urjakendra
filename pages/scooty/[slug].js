/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Banner from "../../components/Banner"
import Router from 'next/router';
const Scootydetails = () => {
    const [pic, setpic] = useState([]);
    useEffect(() => {
        if (Router.asPath == "/scooty/urja-sxl")
            setpic(["/Urja E-Life 1.png", "/Urja E-life 2.png", "/Urja E-life 3.png", "/Urja E-Zess 4.png", "/Urja E-Life 5.png"])
        else
            setpic(["/Urja E-Zess 1.png", "/Urja E-Zess 2.png", "/Urja E-Zess 3.png", "/Urja E-Zess 4.png", "/Urja E-Zess 5.png"])
    }, []);
    return (
        <div className='mt-[8vh] md:mt-[7vw]'>
            <Banner pic={"/electric scooter 4.png"} />
            {/* <div id='aSide' className='-z-10 py-20'>
            <div className='absolute text-7xl text-center left-[40vw] font-bold'>
                <h1><span style={{ fontFamily: "'Montez',cursive" }} className="text-orange-500 ">360°</span><br></br>Urja SXL</h1>
            </div>
        <model-viewer src="/scene.gltf" alt="VR Headset" auto-rotate camera-controls ar disable-zoom touch-action="pan-y" ios-src="/scene.gltf"></model-viewer>
        </div> */}
            <div className='mt-20'>
                <h1 className='w-full text-center text-4xl font-bold text-orange-500 underline-offset-8 underline'>Features</h1>
                <div className='flex mt-6 w-[60%] h-[80%] mx-auto'>
                    <div className='mt-20 w-2/3 h-[80%] font-semibold space-y-6 text-orange-500'>
                        <h1 className='text-6xl font-bold'>Designed for ever-youth</h1>
                        <p>- Iconic Headlamp Design<br></br>- The stunning colors</p>
                        <p className='text-lg text-gray-700'>The design and colours are inspired by the roaring 60s’ and the distinctive rectangular headlamp adds a touch of exclusivity to the iconic Vespa design.</p>
                    </div>
                    <div>
                        <img className='w-[90%] ml-20 ' src={pic[0]} alt='scooty-image' />
                    </div>
                </div>
            </div>
            <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
                <img className='w-[55%] h-auto object-contain self-start' src={pic[1]} alt='front' />
                <div className='font-semibold text-white w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                    <h1 className='text-6xl text-orange-500'>Top-notch<br></br>performance</h1>
                    <p> Powerful electric motor built into the rear wheel deliver superior torque & instant pickup.</p>
                    <p>- Advance Safety features</p>
                    <p> A powerful electric motor built into the rear wheel deliver superior torque provide quick acceleration & gives you all the power you need to ahead of traffic. The e-Scooter also has advance safety features & reliable suspension system to ensure a reliable & smooth ride.</p>

                </div>
            </div>
            <div className=' flex w-full justify-between h-[90vh]'>
                <div className='font-semibold w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                    <h1 className='text-6xl text-orange-500'>Brake-safe</h1>
                    <p className='text-xl text-orange-500'>- Disk Break<br></br>- Drum Break</p>
                    <p>Our ever-reliable braking systems are important features that offer safe braking performance on Indian roads, no matter your riding style.</p>
                </div>
                <img className='' src={pic[2]} alt='front' />
            </div>
            <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
                <img className='w-[55%] self-start h-auto object-contain ' src={pic[1]} alt='front' />
                <div className='font-semibold text-white w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                    <h1 className='text-6xl text-orange-500'>Ride Smooth</h1>
                    <p className='text-xl text-orange-500'>- Good suspensions<br></br>- Anti Drive character</p>
                    <p> Front Hydraulic & rear dual tube shocker suspension system ensure that you have smooth & enjoyable ride.
                    </p>
                </div>
            </div>
            <div className=' flex w-full justify-between h-[90vh]'>
                <div className='font-semibold w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                    <h1 className='text-6xl text-orange-500'>Let&apos;s go <br></br>Digital</h1>
                    <p className='text-xl text-orange-500'>- Digital Cluster</p>
                    <p>
                        The Digital Console Provides real-time and accurate information about the speed of the vehicle, which is important for maintaining safe speed complying with traffic laws. Additional features can also enhance the riding experience & useful information to the rider.
                    </p>
                </div>
                <img className='p-20' src={pic[3]} alt='front' />
            </div>
            <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
                <img className='w-[58.5%] self-start h-auto object-contain ' src={pic[4]} alt='front' />
                <div className='font-semibold text-white w-[30%] mt-20 ml-10 space-y-6 text-lg'>
                    <h1 className='text-6xl text-orange-500'>Cozy & <br></br>Comfortable</h1>
                    <p className='text-xl text-orange-500'>- Rider-friendly seats</p>
                    <p>Be assured a cozy and comfortable seats can enhance the riding experience and reduce fatigue with our rider-friendly seats.</p>
                </div>
            </div>

        </div>
    )
}

export default Scootydetails