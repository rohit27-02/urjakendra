/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Banner from "../../components/Banner"
import Router from 'next/router';
const Scootydetails = () => {
    const [pic, setpic] = useState("");
    useEffect(() => {
       if(Router.asPath=="/scooty/urja-sxl")
       setpic("/Urja E-life 1.1.png")
       else
       setpic("/Urja E-Zess 1.png")
    }, []);
  return (
    <div className='mt-[8vh] md:mt-[7vw]'>
        <Banner pic={"/electric scooter 4.png"}/>
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
                    <p>- Chic colours<br></br>- Iconic monocoque design</p>
                    <p className='text-lg text-gray-700'>The design and colours are inspired by the roaring 60s’ and the distinctive rectangular headlamp adds a touch of exclusivity to the iconic Vespa design.</p>
                </div>
                <div>
                    <img className='w-[90%] ml-20 ' src={pic} alt='scooty-image'/>
                </div>
            </div>
        </div>
        <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
            <img className='w-[55%] h-auto object-contain self-start' src='https://www.vespaindia.com/images/sxl/performance.jpg' alt='front'/>
            <div className='font-semibold text-white w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                <h1 className='text-6xl text-orange-500'>Top-notch<br></br>performance</h1>
                <p className='text-xl text-orange-500'>- 150CC & 125CC BSVI Engine<br></br>- 3V tech Fuel Injection</p>
                <p>The 3 Valve Fuel injection BSVI Engines gives you all the power you need to cruise through the streets. We’re eco-friendly too.</p>
                <p>Power: 10.47PS @ 7600 rpm - 150CC engine<br></br>Power: 9.92PS @ 7500 rpm - 125CC engine</p>
            </div>
        </div>
        <div className=' flex w-full justify-between h-[90vh]'>
            <div className='font-semibold w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                <h1 className='text-6xl text-orange-500'>Brake-safe</h1>
                <p className='text-xl text-orange-500'>- Anti-Lock Braking System (ABS) - 150CC<br></br>- Combined Braking System (CBS) - 125CC</p>
                <p>Our ever-reliable braking systems offer safe braking performance on Indian roads, no matter your riding style.</p>
            </div>
            <img className='' src='https://www.vespaindia.com/images/sxl/brake-safe.jpg' alt='front'/>
        </div>
        <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
            <img className='w-[55%] self-start h-auto object-contain ' src='https://www.vespaindia.com/images/sxl/ride-smooth-sxl.jpg' alt='front'/>
            <div className='font-semibold text-white w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                <h1 className='text-6xl text-orange-500'>Ride Smooth</h1>
                <p className='text-xl text-orange-500'>- Hydraulic Front & Rear suspensions<br></br>- Anti-Dive Character</p>
                <p>Hydraulic suspensions ensure you have a smooth ride adjusted to your riding style. Now head out for a spin with ease.</p>
            </div>
        </div>
        <div className=' flex w-full justify-between h-[90vh]'>
            <div className='font-semibold w-[30%] mt-20 ml-20 space-y-6 text-lg'>
                <h1 className='text-6xl text-orange-500'>Let&apos;s go <br></br>Digital</h1>
                <p className='text-xl text-orange-500'>- Semi Digital Cluster</p>
                <p>The digital console showcases the fuel level, time, has two trip meters and an odometer. That’s a sweet touch of tech to your ride.</p>
            </div>
            <img className='p-20' src='https://www.vespaindia.com/images/sxl/SXL_cluster.jpg' alt='front'/>
        </div>
        <div className='bg-[#53C2D1] flex w-full h-[90vh]'>
            <img className='w-[58.5%] self-start h-auto object-contain ' src='https://www.vespaindia.com/images/sxl/cozy-comfortable.jpg' alt='front'/>
            <div className='font-semibold text-white w-[30%] mt-20 ml-10 space-y-6 text-lg'>
                <h1 className='text-6xl text-orange-500'>Cozy & <br></br>Comfortable</h1>
                <p className='text-xl text-orange-500'>- Rider-friendly seats</p>
                <p>Be assured of premium comfort and spacious seating for a leisure ride with our rider-friendly seats.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Scootydetails