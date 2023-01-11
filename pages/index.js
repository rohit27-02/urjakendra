/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'animate.css';
import { Zoom, Fade } from "react-reveal";
import Router from "next/router";

export default function Home() {
  const [image, setimage] = useState("/scooter.png");


  const changeimage = (e) => {
    setimage(e.currentTarget.id)
    document.getElementById("main-banner").classList.remove("animate__fadeIn")
    document.getElementById("main-banner").classList.add("animate__fadeIn")
  }

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className="text-base mt-[7vw] font-semibold text-gray-600 tracking-wider">

      <Carousel
        renderIndicator={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        className="md:h-[80vh] overflow-hidden"
      >
        <div className="">
          <img className="" src="/1.png" alt="carosuel-banner" />

        </div>
        <div>
          <img className="" src="/banner.png" alt="carosuel-banner" />

        </div>
      </Carousel>

      {/* welcome message */}
      <div className="relative">
        <div className="absolute text-2xl -rotate-90 top-[15vw]  -left-[3vw]">#CONSERVE ENERGY</div>
        <div className="absolute text-2xl -rotate-90 top-[15vw]  -right-[3vw]">#CREATE ERNERGY</div>
        <img src="/background.jpg" alt="background image" className="absolute grayscale top-0 opacity-10" />
        <Fade bottom cascade><div className="flex justify-center text-center max-w-[70vw] gap-8 mx-auto flex-col pt-[6vw] mb-[6vw]">
          <h1 className="text-orange-500 font-bold text-4xl border-b-4 w-fit pb-3 self-center border-orange-500 ">WELCOME TO<br></br> URJA GLOBAL LIMITED</h1>
          <p>We at Urja are committed to providing world-class services to rapidly develop rural India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply.

            With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</p>
          <button onClick={()=>Router.push("/company-overview")} className="bg-orange-500 rounded-full border-black border drop-shadow-sm self-center w-fit px-[1vw] py-[0.5vw] text-white">Know More</button>
          
        </div></Fade>
      </div>
      {/* main banner */}

      <div className="flex w-full animate__animated drop-shadow-xl bg-cover overflow-hidden relative h-[83vh]">
        <img src={image} id="main-banner" alt="main banner" className="object-cover -z-20 w-full animate__animated  absolute" />
        <div id="scooter.png" className="w-1/2 relative border-r-2 cursor-pointer [&>*]:hover:flex group [&>*]:hover:text-[#333333] " onMouseEnter={(e) => changeimage(e)}>
          <div className="bg-white absolute top-0 w-full h-0 group-hover:h-[10vw] transition-all duration-500 ease-in-out"></div>
          <div className="bg-black opacity-40 -z-10 hidden h-full w-full absolute top-0 "></div>
          <div className="hover:text-[#333333] mt-6 transition-all flex-col duration-500 ease-in-out text-white pl-[2vw]  ">
            <h1 className="z-10 drop-shadow-xl text-xl">URJA</h1>
            <p className="font-bold drop-shadow-xl text-3xl">ELECTRIC VEHICLE</p>
          </div>
        </div>
       
        <div id="battery.png" className="w-1/2 relative border-r-2 cursor-pointer [&>*]:hover:flex group [&>*]:hover:text-[#333333] " onMouseEnter={(e) => changeimage(e)}>
          <div className="bg-white absolute top-0 w-full h-0 transition-all duration-500 ease-in-out group-hover:h-[10vw]"></div>
          <div className="bg-black opacity-40 -z-10 w-full h-full hidden absolute top-0 "></div>
          <div className="hover:text-[#333333] mt-6 transition-all flex-col duration-500 ease-in-out text-white pl-[2vw]  ">
            <h1 className="z-10 drop-shadow-xl text-xl">URJA</h1>
            <p className="font-bold drop-shadow-xl text-3xl">BATTERIES</p>
          </div>
        </div>
        
      </div>

      {/* video */}
      <div className="relative overflow-hidden">
        <img src="/background.jpg" alt="background image" className="absolute top-0 grayscale opacity-10" />
        <div className=" py-[4vw] h-[70vh] relative overflow-hidden px-[2vw]">
          <video src="/home.mp4" muted loop autoPlay={true} />
          <div className="bg-black bg-opacity-70 w-[60vw] self-center items-center font-bold px-[2vw] grid py-[2vw] h-[40vh] text-center absolute left-[20vw] top-[10vw]">
            <h1 className="text-orange-500 text-4xl border-b-4 pb-3 border-gray-200 w-fit mx-auto mb-6">URJA GLOBAL LIMITED</h1>
            <p className="text-white font-medium">Urja Global Limited is in one of India’s leading Renewable Energy developers and operators. Urja is engaged in design, consultancy, integration, supply, installation, commissioning & maintenance of off-grid and grid connected Solar Power Plants. We are approved Channel Partners of Ministry of New and Renewable Energy (MNRE), Govt. of India.</p>
          </div>
        </div>
      </div>
    

      {/* banner */}
      <div className="relative overflow-hidden">

        {/* services */}
        <img src="/background.jpg" alt="background image" className="absolute top-0 grayscale opacity-10" />
        <div className="w-full h-[36.2vw] sticky -bottom-[34vw]  left-0">
          <div className="flex flex-col w-full justify-center pt-[5vw] items-center text-[2.35vw] font-bold">
            <span className="text-orange-500 text-4xl border-b-[0.3vw] border-orange-500 pb-3">SERVICE NETWORK</span>
          </div>
          <p className="w-full text-center font-medium my-[2.5vw]">A nation-wide network of around 2000 service professionals with tremendous experience.</p>
          <div className="flex  justify-center gap-[2vw]">
            <Zoom><div className="w-[20.5vw] h-[14.5vw] gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-5xl font-mono">38,624</span><span>Dealer Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-5xl font-mono">592</span><span>Sales & Service Team</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-5xl font-mono">2,240</span><span>Distributor Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-5xl font-mono">110 Mn</span><span>Happy Customers</span></div></Zoom>
          </div>
        </div>
      </div>

      {/* urja care and find a delear */}
      <div className="relative overflow-hidden">
        <img src="/background.jpg" alt="background image" className="absolute grayscale top-0 opacity-10" />
        <div className="flex  relative mb-[4vw]">
          <div className="w-full absolute top-0 bg-black opacity-40 h-full"></div>
          <div className="w-1/2 relative font-bold text-3xl"><img src="/b1.png" alt="another banner" />
            <div onClick={()=>Router.push("/book-a-complaint")} className="border-b-4 cursor-pointer hover:text-4xl transition-all duration-300 ease-in-out border-orange-500 text-white absolute bottom-[2vw] left-[2vw]">
              URJA CARE
            </div>
          </div>
          <div className="w-1/2 relative font-bold text-3xl"><img src="/b2.png" alt="another banner" />
            <div onClick={()=>Router.push("/our-network")} className="border-b-4 cursor-pointer hover:text-4xl transition-all duration-300 ease-in-out border-orange-500 text-white absolute bottom-[2vw] left-[2vw]">
              FIND A DEALER
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
