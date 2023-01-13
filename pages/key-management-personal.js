/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Banner from '../components/Banner'
import { BsArrowRight } from "react-icons/bs"
import { Bounce } from 'react-reveal'
const Keymanagementpersonal = () => {
    const [show, setshow] = useState(false);
    const [title, settitle] = useState("");
    const [info, setinfo] = useState("");
    const [pos, setpos] = useState("");
    const [img, setimg] = useState("");
    const directors = [{ id: "0", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg", name: "Mr. Kamal Kumar Sharma", pos: "Chief Financial Officer", info: "Mr. Kamal Kumar Sharma having an experience of Thirty Years in the field of Accounting & Finance management. His last assignment was with Orient Press Limited Which is listed at National Stock Exchange. Prior to which he had worked with large Public Companies. Further, his broad vision and strategies will help the company to emerge from the challenging situations that the company may come across." },
    { id: "1", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg", name: "CS Preeti Kataria", pos: "Company Secretary ", info: "She is a qualified company secretary, passed her professional programme in August 2017 from “The Institute of Company Secretaries of India” and has been awarded a degree in September 2017. She has more than 4.5 years of experience in handling the secretarial and legal compliances. She is also holding a degree of B.com from Delhi University. Her impressive profile, good knowledge and personality, will ensure a company complies with financial and legal requirements, as well as maintaining its high standards of corporate governance." },
    { id: "2", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg", name: "Gaurav Aggarwal", pos: "Chief Executive Officer", info: "Mr. Gaurav Aggarwal has over 16 years of experience in Business Management as a profit centre with the Telecom / Broadband / IT / Service industries. He has led the evolution & growth of CA TV & broadband services in North India. An effective leader with distinguished ability of building, leading & motivating large multicultural teams. Have represented organizations at many world forums." },
    ]

    const showContent = (e) => {
        setshow(true)
        settitle(directors[e.currentTarget.id].name)
        setinfo(directors[e.currentTarget.id].info)
        setpos(directors[e.currentTarget.id].pos)
        setimg(directors[e.currentTarget.id].img)
    }

    return (
        <div>
            {show && <div onClick={() => setshow(false)} className='w-[100vw] h-[100vh]  bg-black bg-opacity-50 flex items-center justify-center  top-0  fixed z-50'>
                <Bounce top><div className='flex w-[50rem] h-[30rem] text-gray-700 bg-white drop-shadow-lg shadow-inner rounded-lg text-lg font-semibold text-center'>
                    <img src={img} alt="person" />
                    <div className='p-14 h-[90%] overflow-hidden'>
                        
                        <p className='overflow-auto pb-10 pr-8 h-full'>{info}</p>
                    </div>
                </div></Bounce>
            </div>}
            <Banner pic={"https://www.tatapower.com/images/bod-1920-372.jpg"} title="KEY MANAGEMENT PERSONNEL" />
            <div className='px-20 py-24 bg-gray-100' >
                <h1 className='text-3xl text-gray-600 font-bold mb-12'>KEY MANAGEMENT PERSONNEL</h1>
                <div className='flex flex-wrap gap-6 flex-1 '>
                    {directors.map((director) => {
                        return <div key={director.name} id={director.id} onClick={(e) => showContent(e)} className="w-[290px] h-[390px] bg-white cursor-pointer drop-shadow-lg group font-medium">
                            <img className='w-full h-[200px] object-cover' src={director.img} alt="director-image" />
                            <div className='p-8 space-y-4'>
                                <h1 className='font-semibold'>{director.name}</h1>
                                <div className='text-sm'>{director.pos}</div>
                                <button className='text-sm  flex items-center gap-2'>More<BsArrowRight className='text-orange-500 group-hover:translate-x-2 transition-all duration-300 text-xl' /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Keymanagementpersonal