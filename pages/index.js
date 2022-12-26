/* eslint-disable @next/next/no-img-element */
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineRight } from 'react-icons/ai'
import 'animate.css';
import { Zoom } from "react-reveal";

const batteries = [{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },
{ title: "battery 1", description: "superior quality distinguishes an extraordinary product from an ordinary one.", image: "https://galo.co.in/wp-content/uploads/2022/10/Artboard-1-1-650x650.png" },

]

export default function Home() {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }} className="text-[1.25vw] mt-[7vw]">

      <Carousel
        renderIndicator={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        className="md:h-[80vh] overflow-hidden"
      >
        <div>
          <img className="" src="banner.png" alt="carosuel-banner" />

        </div>
        <div>
          <img className="" src="/banner2.png" alt="carosuel-banner" />

        </div>
        <div>
          <img className="" src="/banner3.png" alt="carosuel-banner" />

        </div>
      </Carousel>

      {/* products */}

      <div className="w-full h-[114vw]">
        <img src="https://www.okayapower.com/assets/img/main/slant-left.png" className="absolute left-[4vw] top-[60vw]" alt="line" />
        <img src="https://www.okayapower.com/assets/img/main/slant-left.png" className="absolute right-[4vw] top-[60vw]" alt="line" />
        <div className="pt-[5vw] pb-[2.5vw]">
          <div className="flex flex-col w-full justify-center items-center text-[2.35vw] font-bold"><span>BEST INVERTER BATTERY</span>
            <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">OUR PRODUCTS</span>
          </div>
        </div>
        <div className="flex flex-wrap mx-[5vw] justify-center ">
          {Object.keys(batteries).map((item) => {
            return <Zoom key={batteries[item].title}><div className="h-[29.5vw] my-[1vw] w-[28vw] items-center flex gap-[0.5vw] flex-col">
              <img src={batteries[item].image} className="w-[19vw] bg-gray-200" alt="product" />
              <div className="flex self-start gap-[0.5vw] mx-[4.5vw] mt-[1vw] ">
                <img className="" src="https://www.okayapower.com/assets/img/main/smf-heading-arrow.png" alt="png" />
                <h1 className="text-orange-400 text-[1.1vw]">{batteries[item].title}</h1>
              </div>
              <p className="px-[4.5vw] text-[0.975vw]">{batteries[item].description}</p>
            </div></Zoom>
          })}
        </div>
      </div>

      {/* about us */}

      <div className="w-full h-[49vw] bg-[#f2f3f4]">
        <div className="flex flex-col w-full justify-center pt-[5vw] pb-[2.5vw] items-center text-[2.35vw] font-bold">
          <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">ABOUT US</span>
        </div>
        <div className="flex justify-center flex-col items-center mx-[5vw] gap-[2vw]">
          <p>“A trusted name for your power storage needs”</p>
          <p className="text-center">OKAYA, the pioneer in the battery manufacturing industry, has been a symbol of trust and quality for years. Okaya is known for providing a wide range of batteries to meet the different energy requirements of the consumer. The varied product range of batteries is suitable for all kinds of applications, like Tubular Battery- Inverter Battery and Solar Battery, SMF Battery, E-Rickshaw Battery, Lithium and EV charging solutions.</p>
          <p>Okaya is the sole manufacturer of 100% Tubular Batteries, which are considered as best for power backup needs, used both in Inverter and Solar Batteries.</p>
          <p>The batteries manufactured by Okaya are:</p>
          <ol className="list-disc">
            <li>Eco-friendly</li>
            <li>Reliable</li>
            <li>Long-Lasting</li>
            <li>Trusted for robust backups</li>
          </ol>
          <button className="bg-orange-400 text-white px-[1vw] py-[0.5vw] rounded-sm text-[1.1vw]">Read More</button>
        </div>
      </div>

      {/* banner */}
      <div className="relative">
        <div style={{ backgroundImage: `url("/wallpaper.jpg")` }} className=" bg-fixed sticky top-[10vw] w-full hide -z-10 text-white h-[34vw]  bg-center overflow-auto">

          <div className="underline underline-offset-[1vw] text-[2.35vw] font-bold text-center  pt-[8vw]">WHY URJA?</div>
          <div className="flex font-bold justify-center mt-[4vw]">
            <div className="flex h-[20vw] flex-col gap-[1vw] mx-[4vw] text-center w-[10vw]">
              <img src="https://www.okayapower.com/assets/img/main/2-1.png" alt="logo1" />
              <span>Most Trusted Brand</span>
            </div>
            <div className="flex h-[20vw] flex-col gap-[1vw] mx-[4vw] text-center w-[10vw]">
              <img src="https://www.okayapower.com/assets/img/main/2-2.png" alt="logo2" />
              <span>Premium Quality Batteries</span>
            </div>
            <div className="flex h-[20vw] flex-col gap-[1vw] mx-[4vw] text-center w-[10vw]">
              <img src="https://www.okayapower.com/assets/img/main/2-3.png" alt="logo3" />
              <span>ISO Certified Automated Plant</span>
            </div>
            <div className="flex h-[20vw] flex-col gap-[1vw] mx-[4vw] text-center w-[10vw]">
              <img src="https://www.okayapower.com/assets/img/main/2-5.png" alt="logo4" />
              <span>State-Of-The-Art Technology</span>
            </div>
          </div>
          <div className="cursor-pointer flex items-center gap-[1vw] font-bold justify-center">Explore <AiOutlineRight /></div>
        </div>

        {/* services */}

        <div className="w-full h-[36.2vw] sticky -bottom-[34vw]  left-0 z-20 bg-[#f2f3f4]">
          <div className="flex flex-col w-full justify-center pt-[5vw] items-center text-[2.35vw] font-bold">
            <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">Service Network</span>
          </div>
          <p className="w-full text-center my-[2.5vw]">A nation-wide network of around 2000 service professionals with tremendous experience.</p>
          <div className="flex  justify-center gap-[2vw]">
            <Zoom><div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">38,624</span><span>Dealer Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">592</span><span>Sales & Service Team</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">2,240</span><span>Distributor Network</span></div></Zoom>
            <Zoom><div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-semibold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">110 Mn</span><span>Happy Customers</span></div></Zoom>
          </div>
        </div>
      </div>
    </div>
  )
}
