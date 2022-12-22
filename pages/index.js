/* eslint-disable @next/next/no-img-element */
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    <div className="text-[1.25vw]">

      <Carousel
        renderIndicator={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <img src="banner.png" alt="carosuel-banner" />

        </div>
        <div>
          <img src="https://www.okayapower.com/assets/img/e_rickshaw.webp" alt="carosuel-banner" />

        </div>
        <div>
          <img src="https://www.okayapower.com/assets/img/e_rickshaw.webp" alt="carosuel-banner" />

        </div>
      </Carousel>

      {/* products */}

      <div className="w-full h-[114vw]">
        <div className="pt-[5vw] pb-[2.5vw]">
          <div className="flex flex-col w-full justify-center items-center text-[2.5vw] font-bold"><span>BEST INVERTER BATTERY</span>
            <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">OUR PRODUCTS</span>
          </div>
        </div>
        <div className="flex flex-wrap mx-[5vw] justify-center ">
          {Object.keys(batteries).map((item) => {
            return <div key={batteries[item].title} className="h-[29.5vw] my-[1vw] w-[28vw] items-center flex gap-[0.5vw] flex-col">
              <img src={batteries[item].image} className="w-[19vw] bg-gray-200" alt="product" />
              <h1 className="text-orange-400 text-[1.1vw]">{batteries[item].title}</h1>
              <p className="px-[4.5vw] text-[0.975vw]">{batteries[item].description}</p>
            </div>
          })}
        </div>
      </div>

      {/* about us */}

      <div className="w-full h-[49vw] bg-[#f2f3f4]">
        <div className="flex flex-col w-full justify-center pt-[5vw] pb-[2.5vw] items-center text-[2.5vw] font-bold">
          <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">ABOUT US</span>
        </div>
        <div className="flex justify-center flex-col items-center mx-[5vw] gap-[2vw]">
          <p>“A trusted name for your power storage needs”</p>
          <p>OKAYA, the pioneer in the battery manufacturing industry, has been a symbol of trust and quality for years. Okaya is known for providing a wide range of batteries to meet the different energy requirements of the consumer. The varied product range of batteries is suitable for all kinds of applications, like Tubular Battery- Inverter Battery and Solar Battery, SMF Battery, E-Rickshaw Battery, Lithium and EV charging solutions.</p>
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

      <div className="">

      </div>

      {/* services */}

      <div className="w-full h-[36.2vw] bg-[#f2f3f4]">
        <div className="flex flex-col w-full justify-center pt-[5vw] items-center text-[2.5vw] font-bold">
          <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">Service Network</span>
        </div>
        <p className="w-full text-center my-[2.5vw]">A nation-wide network of around 2000 service professionals with tremendous experience.</p>
        <div className="flex  justify-center gap-[2vw]">
          <div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-bold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">38,624</span><span>Dealer Network</span></div>
          <div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-bold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">592</span><span>Sales & Service Team</span></div>
          <div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-bold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">2,240</span><span>Distributor Network</span></div>
          <div className="w-[20.5vw] h-[14.5vw] flex justify-center items-center flex-col drop-shadow-md bg-white font-bold text-[#555555]"><span className="text-orange-400 text-[3.9vw]">110 Mn</span><span>Happy Customers</span></div>
        </div>
      </div>

    </div>
  )
}
