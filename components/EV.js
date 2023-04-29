/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
import Router from 'next/router'
const EV = ({ title, pic }) => {
    return (
        <div>
            <div className='md:mt-[6.9vw] mt-[8vh] h-[28vw] w-full overflow-hidden'>
                <img className='w-full object-cover h-full' src={pic} alt="banner-image" />
                <h1 className='absolute top-[20vw] text-5xl font-semibold drop-shadow-lg text-white w-full text-center'>{title}</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-6 md:px-28 pt-24 md:flex-row flex-col-reverse items-center">
                    <Slide left cascade><div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16 mb-0 items-center  text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">E-Zess
                            
                        </h1>
                        <p className="mb-8 leading-relaxed">Urja Introducing the best electric scooter E-ZESS with an unrivalled range up to 100Kms per charge. It features a sleek & modern design, with lightweight and durable frame and is equipped with advance safety features, robust waterproof & dust resistant battery, while the powerful motor provides a smooth & enjoyable ride.</p>
                        <div className="flex justify-center">
                            <button onClick={()=>Router.push("/scooty/urja-sxl")} className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">Know more</button>

                        </div>
                    </div></Slide>
                    <Slide right><div className="lg:max-w-lg mb-16 md:mb-0 lg:w-fit md:w-1/2 w-full">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="/EV photo.png" />
                    </div></Slide>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-6 md:px-28 pb-24 mt-10 md:flex-row flex-col items-center">
                    <Slide left><div className="lg:max-w-lg lg:w-fit md:w-1/2 w-full mb-10 md:mb-0">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="/EV photo 3.png" />
                    </div></Slide>
                    <Slide right cascade><div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">E-Life
                        </h1>
                        <p className="mb-8 leading-relaxed">Urja Introducing the best electric scooter E-Life with an unrivalled range up to 100Kms per charge. It features a sleek & modern design, with lightweight and durable frame and is equipped with advance safety features, robust waterproof & dust resistant battery, while the powerful motor provides a smooth & enjoyable ride.</p>
                        <div className="flex justify-center">
                            <button onClick={()=>Router.push("/scooty/urja-xl")} className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">Know more</button>

                        </div>
                    </div></Slide>
                </div>
            </section>
        </div>
    )
}

export default EV