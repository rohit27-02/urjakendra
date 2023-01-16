/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
const EV = ({ title, pic }) => {
    return (
        <div>
            <div className='md:mt-[6.9vw] h-[28vw] w-full overflow-hidden'>
                <img className='w-full object-cover h-full' src={pic} alt="banner-image" />
                <h1 className='absolute top-[20vw] text-5xl font-semibold drop-shadow-lg text-white w-full text-center'>{title}</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-28 pt-24 md:flex-row flex-col items-center">
                    <Slide left cascade><div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block"></br>readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">Know more</button>

                        </div>
                    </div></Slide>
                    <Slide right><div className="lg:max-w-lg lg:w-fit md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="/EV photo.png" />
                    </div></Slide>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-28 pb-24 mt-10 md:flex-row flex-col items-center">
                    <Slide left><div className="lg:max-w-lg lg:w-fit md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="/EV photo.png" />
                    </div></Slide>
                    <Slide right cascade><div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block"></br>readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg">Know more</button>

                        </div>
                    </div></Slide>
                </div>
            </section>
        </div>
    )
}

export default EV