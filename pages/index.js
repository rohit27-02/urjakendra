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
          <img src="https://www.okayapower.com/assets/img/tubular.webp" alt="carosuel-banner" />

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
              <h1 className="text-orange-400 text-[1.4vw]">{batteries[item].title}</h1>
              <p className="px-[4.5vw]">{batteries[item].description}</p>
            </div>
          })}
        </div>
      </div>
        
                       {/* about us */}

      <div className="w-full h-[43.75vw] bg-[#f2f3f4]">
      <div className="flex flex-col w-full justify-center pt-[5vw] pb-[2.5vw] items-center text-[2.5vw] font-bold">
          <span className="text-orange-400 border-b-[0.3vw] border-gray-500 pb-[0.5vw]">ABOUT US </span>
          </div>
        <p>

        </p>
        <button>Read More</button>
      </div>
    </div>
  )
}
