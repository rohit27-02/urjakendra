/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import Letushelpyou from '../components/Letushelpyou'
import { Slide } from 'react-reveal'
import Banner from "../components/Banner"

const details = [["6 Months", "120Ah@c20", "410 x 171 x 209", "Flat Plate", "ER-18000","Image Urja E-rickshaw Battery.png"], ["12 months", "140Ah@c20", "410 X 175 X 242", "tubular plate", "ER-20000","Image Urja E-rickshaw Battery 20000.png"]]
const Erickshawbattery = () => {
  const [selected, setselected] = useState(0);
  return (
    <div className='mt-[8vh] md:mt-[6.9vw] text-sm md:text-base'>
      <Banner pic={"/battery banner.png"} />
      <div className='bg-gray-100 overflow-hidden relative'>
        <img src='/background.jpg' className='absolute  grayscale opacity-0 md:opacity-10' alt='background' />
        <h1 className='text-3xl md:text-4xl font-bold text-center uppercase border-b-2 md:border-b-4 pb-3 border-orange-500 w-fit mx-auto text-orange-500 py-[3vh] md:py-[3vw]'>E-Rickshaw Battery</h1>
        <div className='relative'>
          <Slide bottom>
            <div className='w-[57%] mt-10 mx-auto flex gap-16 font-semibold z-30'>
              <button onClick={()=>setselected(0)} className='border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in  cursor-pointer px-6 py-3'>120AH</button>
              <button onClick={()=>setselected(1)} className='border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in  cursor-pointer px-6 py-3'>140AH</button>
            </div>
            <img className='md:absolute md:left-[12vw] top-12  md:w-1/3' src={details[selected][5]} alt='left-pic' />
            <div className='md:ml-80 ml-6 mt-10 w-fit'>Model : <span className='font-semibold font-sans'>{details[selected][4]}</span></div>
            <div className='md:absolute bottom-[4vw] space-y-[1vw] left-[18vw]'>

              <h1 className='text-lg md:text-xl mx-[7vh] md:mx-[7vw] border-b-2 md:border-b-4 border-orange-500 font-bold'>SHOP NOW</h1>
              <div className='flex items-center pt-8 gap-[3vh] justify-center md:justify-start md:gap-[3vw]'>
                <a href='https://www.flipkart.com/urja-i-volt-er1800-e-rickshaw-battery-120-ah-car-truck/p/itm8b313d3ea0f5a?pid=VEBGHCQKZZBGPDCW&lid=LSTVEBGHCQKZZBGPDCWIRFO7U&marketplace=FLIPKART&q=urja+i-volt+e+rikshaw+battery&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=2c4c29ab-97d8-4eef-a041-0c55c781bfea.VEBGHCQKZZBGPDCW.SEARCH&ppt=hp&ppn=homepage&ssid=j5dy6wrru80000001673432447182&qH=9950e6318a5801f6' target={'_blank'}><img className=' cursor-pointer w-32' src='/f1.png' alt='flipkart-shop now' /></a>
                <a target="_blank" href='https://www.amazon.in/Rickshaw-Battery-Batteries-ER18000-Warranty/dp/B0BFRB2JR7/ref=sr_1_2?crid=13PPEKQADI5L3&keywords=urja+e+rickshaw&qid=1673432361&sprefix=urj%2Caps%2C673&sr=8-2'><img src='/a1.webp' className='w-28 cursor-pointer' alt="a" /></a>
              </div>
            </div>
          </Slide>
          <Slide bottom cascade><div className='flex flex-col mt-[6vh] px-6 md:px-0 md:mt-[2vw] pb-[6vh] md:pb-[6vw] md:items-end'>
            <h1 className='text-2xl md:w-1/3 font-bold uppercase'>Battery<br></br> Specification</h1>
            <div className='w-[9vw] mt-[1vw] h-[0.5vw]  bg-orange-500 rounded-full mx-[24vw]'></div>
            <div className='flex md:w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Warranty</h1>
                <p className='font-medium '>Warranty - {details[selected][0]}</p>
              </div>
            </div>
            <div className='flex md:w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Capacity</h1>
                <p className='font-medium '>Capacity – {details[selected][1]}</p>
              </div>
            </div>
            <div className='flex md:w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Dimensions</h1>
                <p className='font-medium '>{details[selected][2]}</p>
              </div>
            </div>
            <div className='flex md:w-1/3 my-4 items-center'>
              <div>
                <h1 className='uppercase text-xl font-bold'>Battery type</h1>
                <p className='font-medium '>{details[selected][3]}</p>
              </div>
            </div>
          </div></Slide>
        </div>
      </div>
      <div>
        <h1 className='py-[3vh] md:py-[3vw] text-3xl md:text-4xl text-center font-bold text-orange-500 border-b-2 md:border-b-4 border-orange-500 mb-8 pb-3 w-fit uppercase mx-auto'>Product Description</h1>
        <div className='flex flex-col md:flex-row justify-between md:px-[8vw] gap-[0.5vw] pb-[2vh] md:pb-[2vw]'>
          <p className='tracking-wide md:text-justify mx-6 md:mx-10 md:mt-12 leading-[3.5vh] md:leading-[2vw] font-semibold text-gray-600 '>Urja battery is specially engineered to suit the requirements of the e-rickshaws. The superior tubular battery has been designed to guarantee enormous power, durability and safety on all types of terrains. A unique balance of advanced grid design and innovative technology ensure high mileage resulting in more life and even more profit. E-Shakti and is environmentally friendly and promises you a longer battery life.</p>
          <img className='md:w-1/3' src='https://www.livguard.com/product-detail/img/E-Shakti-1500-1550.jpg' alt='description-image' />
        </div>
      </div>
      <Letushelpyou />
    </div>
  )
}

export default Erickshawbattery