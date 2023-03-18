import React from 'react'

const registration = () => {
    return (
        <div className='relative bg-gray-100 pt-[6.9vw] px-[2vw]'>
            <h1 className='text-xl font-bold bg-gray-200 py-[0.5vw] mt-[2vw] px-[1vw] '>Registration</h1>
            <div className='px-[1vw]'>
                {/* <h1 className='font-bold mt-[2vw] mb-[1vw]'>Do you want to find out more about your career options in our company?</h1> */}
                <p className='text-sm mt-[2vw]'>If you&apos;re interested in joining our team, please submit your resume through our website. We review applications on a rolling basis, and we&apos;ll be in touch if we believe you&apos;re a good fit for one of our open positions.

Thank you for considering a career with us. We look forward to hearing from you!</p>
            </div>
            <section className="text-gray-600 body-font px-[1vw]">
                <div className="container  py-10  flex flex-wrap items-center">
                    <div className=" md:w-1/2 bg-gray-100 rounded-lg  flex flex-col  w-full mt-10 md:mt-0">
                        <div className="relative mb-4 flex">
                            <label for="first-name" className="leading-7 w-1/2 text-sm text-gray-600">First Name</label>
                            <input type="text" id="first-name" name="first-name" className="w-1/2 bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 flex">
                            <label for="" className="leading-7 w-1/2 text-sm text-gray-600">Last Name</label>
                            <input type="text" id="last-name" name="last-name" className="w-1/2 bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 items-center flex">
                            <label for="cv" className="leading-7 w-1/2 text-sm text-gray-600">Upload CV</label>
                            <input type="file" id="cv" name="cv" className="w-1/2 bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white w-fit bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Send</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default registration