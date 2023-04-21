/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const latestupdates = () => {
    return (
        <div className='bg-gray-100 text-gray-800 drop-shadow-sm font-sans w-[1200px] mx-auto drop-shadow-sm mt-[7vw] py-6 px-5  mb-28'>
            <h1 className='border-b-2 py-1 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Chairman&apos;s Message</h1>

            <div className='flex items-start gap-40 my-4'>
                <img height={"100"} width={"100"} src='https://ternary.co.za/wp-content/uploads/2013/08/Individuals.png' alt='chairman' s photo />
                <div>
                    <div className='mb-16 drop-shadow-sm space-y-2'>
                        <h1 className='text-xl font-semibold'>Merry Christmas, Happy New Year 2021 & Some thoughts on the Covid19 enabled Avatar</h1>
                        <p>At the outset, I would like to begin by wishing you a great year ending time with friends and family. Let us all try our best to be in the best of spirits as 2020 comes to a close! At times, force de majeure ends up altering the world forever. Covid19 is definitely the single most paradigm-shifting event since World War II, if not longer. The business architectures have altered. Some, forever. We have no clue when we will see the so-called “post-Covid” era. 2021 might be more severe than 2020! We don’t know yet. In fact, no one knows !</p>
                    </div>
                    <div className='drop-shadow-sm space-y-2'>
                        <h1 className='text-xl font-semibold'>The First 25 Years:</h1>
                        <p>In a blink CL Is 25 years Old! This is very important moment to pause and celebrate this feat. Not all entrepreneurs, founding teams are fortunate enough to see their efforts grow in to an organization. CL has not only done that but also gone on to achieve some remarkable milestones.</p>
                    </div>
                </div>
            </div>

            <h1 className='border-b-2 py-1 mt-10 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Chairman Speaks - December 2020</h1>
            <h1 className='border-b-2 py-1 mt-10 border-gray-800 text-2xl text-orange-500 font-semibold border-dotted'>Latest Updates</h1>
            <h2 className='text-lg my-2'>Announcements</h2>
            <div className='mx-20 my-4'>
                <p>Certificate u/r 74(5) of SEBI(DP) Regulations, 2018 - Q4/FY 2022-23</p>
                <a href='/' className='text-sm text-gray-400 hover:underline underline-offset-4 hover:text-gray-800'>Download PDF</a>
            </div>
        </div>
    )
}

export default latestupdates