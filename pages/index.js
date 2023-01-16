/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'animate.css';
import { Zoom, Fade } from "react-reveal";
import Router from "next/router";

export default function Home() {
  const [image, setimage] = useState("/scooter.png");
  const [sw, setsw] = useState(false);
  useEffect(() => {
    if (screen.width < 768) {
      setsw(true)
    }
  }, []);
  const changeimage = (e) => {
    setimage(e.currentTarget.id)
    document.getElementById("main-banner").classList.remove("animate__fadeIn")
    document.getElementById("main-banner").classList.add("animate__fadeIn")
  }

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className="text-sm md:text-base md:mt-[7vw] mt-[7vh] font-semibold text-gray-600 tracking-wider">

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
        {!sw && <img src="/background.jpg" alt="background image" className="absolute grayscale top-0 opacity-10" />}
        <Fade bottom cascade><div className="flex justify-center md:text-center px-8 md:px-0 md:max-w-[70vw] gap-8 mx-auto flex-col pt-[6vh] md:pt-[6vw] mb-6vh md:mb-[6vw]">
          <h1 className="text-orange-500 font-bold text-3xl md:text-4xl w-fit pb-3 self-center ">WELCOME TO<br></br> URJA GLOBAL<span className="border-orange-500 border-b-4"> LIMITED</span></h1>
          <p>We at Urja are committed to providing world-class services to rapidly develop rural India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply.

            With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirements</p>
          <button onClick={() => Router.push("/company-overview")} className="bg-orange-500 rounded-full border-black border drop-shadow-sm md:self-center w-fit px-6 py-3 text-white">Know More</button>
          <div style={{ fontFamily: "sans-serif" }} className="flex justify-center gap-6">
            <span className=" md:text-2xl  ">#CONSERVE ENERGY</span>
            <span className=" md:text-2xl ">#CREATE ERNERGY</span>
          </div>
        </div></Fade>
      </div>
      {/* main banner */}

      <div className="flex mt-10 md:mt-0 flex-row w-full animate__animated drop-shadow-xl bg-cover overflow-hidden relative h-[84vw] md:h-[83vh]">
        <img src={image} id="main-banner" alt="main banner" className="object-contain md:object-cover -z-20 w-full h-full animate__animated  absolute" />
        <div id="scooter.png" className=" w-1/2 relative md:border-r-2 cursor-pointer [&>*]:hover:flex group [&>*]:hover:text-[#333333] " onMouseEnter={(e) => changeimage(e)}>
          <div className="bg-white absolute top-0 w-full h-0 md:group-hover:h-[10vw] group-hover:h-[10vh] transition-all duration-500 ease-in-out"></div>
          <div className="bg-black opacity-40 -z-10 hidden md:h-full w-full absolute top-0 "></div>
          <div className=" hover:text-[#333333] mt-6 transition-all flex-col duration-500 ease-in-out md:text-white pl-[2vh] md:pl-[2vw]  ">
            <h1 className="z-10 drop-shadow-xl text-sm md:text-xl">URJA</h1>
            <p className="font-bold drop-shadow-xl text-base md:text-3xl">ELECTRIC VEHICLE</p>
          </div>
        </div>

        <div id="battery.png" className=" w-1/2 relative  cursor-pointer [&>*]:hover:flex group [&>*]:hover:md:text-[#333333] " onMouseEnter={(e) => changeimage(e)}>
          <div className="bg-white absolute top-0 w-full h-0 transition-all duration-500 ease-in-out group-hover:h-[10vh] md:group-hover:h-[10vw]"></div>
          <div className="bg-black opacity-40 -z-10 w-full md:h-full hidden absolute top-0 "></div>
          <div className="hover:text-[#333333] mt-6 transition-all flex-col duration-500 ease-in-out md:text-white pl-[2vh] md:pl-[2vw]  ">
            <h1 className="z-10 drop-shadow-xl text-sm md:text-xl">URJA</h1>
            <p className="font-bold drop-shadow-xl text-base md:text-3xl">BATTERIES</p>
          </div>
        </div>

      </div>

      {/* video */}
      <div className="relative overflow-hidden">
        {!sw && <img src="/background.jpg" alt="background image" className="absolute  top-0 grayscale opacity-10" />}
        <div className=" md:py-[4vw] h-[60vw] md:h-[70vh] relative overflow-hidden px-0 md:px-[2vw]">
          <video className="h-full md:h-auto" src="/home.mp4" muted loop autoPlay={true} />
          <div className="bg-black bg-opacity-70 w-80 md:w-[60vw] self-center items-center font-bold px-[2vh] md:px-[2vw] grid py-[2vh] md:py-[2vw] h-[55vw] md:h-[40vh] text-center absolute left-7 md:left-[20vw] top-3 md:top-[10vw]">
            <h1 className="text-orange-500 text-xl md:text-4xl md:border-b-4 md:pb-3 border-gray-200 w-fit mx-auto mb-6">URJA GLOBAL LIMITED</h1>
            <p className="text-white text-xs md:text-sm font-normal md:font-medium">Urja Global Limited is in one of India’s leading Renewable Energy developers and operators. Urja is engaged in design, consultancy, integration, supply, installation, commissioning & maintenance of off-grid and grid connected Solar Power Plants. We are approved Channel Partners of Ministry of New and Renewable Energy (MNRE), Govt. of India.</p>
          </div>
        </div>
      </div>


      {/* banner */}
      <div className="relative overflow-hidden">

        {/* services */}
        {!sw && <img src="/background.jpg" alt="background image" className="absolute top-0 grayscale opacity-10" />}
        <div className="w-full h-[90vh] md:h-[36.2vw] sticky -bottom-[34vh] md:-bottom-[34vw]  left-0">
          <div className="flex flex-col w-full justify-center pt-[5vh] md:pt-[5vw] items-center md:text-[2.35vw] font-bold">
            <span className="text-orange-500 text-3xl md:text-4xl border-b-[0.3vh] md:border-b-[0.3vw] border-orange-500 pb-3">SERVICE NETWORK</span>
          </div>
          <p className="w-full text-center font-medium my-[2.5vh] md:my-[2.5vw]">A nation-wide network of around 2000 service professionals with tremendous experience.</p>
          <div className="flex  justify-center flex-col md:flex-row items-center md:items-start gap-[2vh] md:gap-[2vw]">
            <Zoom><div className="w-[20.5vh] md:w-[20.5vw] h-[14.5vh] md:h-[14.5vw] gap-[1vh] md:gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-4xl md:text-5xl font-mono">38,624</span><span>Dealer Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vh] md:w-[20.5vw] h-[14.5vh] md:h-[14.5vw] gap-[1vh] md:gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-4xl md:text-5xl font-mono">592</span><span>Sales & Service Team</span></div></Zoom>
            <Zoom><div className="w-[20.5vh] md:w-[20.5vw] h-[14.5vh] md:h-[14.5vw] gap-[1vh] md:gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-4xl md:text-5xl font-mono">2,240</span><span>Distributor Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vh] md:w-[20.5vw] h-[14.5vh] md:h-[14.5vw] gap-[1vh] md:gap-[1vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-500 font-normal text-4xl md:text-5xl font-mono">110 Mn</span><span>Happy Customers</span></div></Zoom>
          </div>
        </div>
      </div>

      {/* urja care and find a delear */}
      <div className="relative overflow-hidden">
        <img src="/background.jpg" alt="background image" className="absolute grayscale top-0 opacity-10" />
        <div className="flex flex-col md:flex-row relative mb-[4vh] md:mb-[4vw]">
          <div className="w-full absolute top-0 bg-black opacity-40 h-full"></div>
          <div className="w-full md:w-1/2 relative font-bold text-xl md:text-3xl"><img src="/b1.png" alt="another banner" />
            <div onClick={() => Router.push("/book-a-complaint")} className="border-b-4 cursor-pointer md:hover:text-4xl transition-all duration-300 ease-in-out border-orange-500 text-white absolute bottom-[2vh] md:bottom-[2vw] left-[2vh] md:left-[2vw]">
              URJA CARE
            </div>
          </div>
          <div className="w-full md:w-1/2 relative font-bold text-xl md:text-3xl"><img src="/b2.png" alt="another banner" />
            <div onClick={() => Router.push("/our-network")} className="border-b-4 cursor-pointer md:hover:text-4xl transition-all duration-300 ease-in-out border-orange-500 text-white absolute bottom-[2vh] md:bottom-[2vw] left-[2vh] md:left-[2vw]">
              FIND A DEALER
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
