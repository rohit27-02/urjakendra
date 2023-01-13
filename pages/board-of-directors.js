/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import Banner from '../components/Banner'
import {BsArrowRight} from "react-icons/bs"
import { Bounce } from 'react-reveal'
const Boardofdirection = () => {
  const [show, setshow] = useState(false);
  const [title, settitle] = useState("");
  const [info, setinfo] = useState("");
  const [pos, setpos] = useState("");
  const directors=[{id:"0",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Mr. Yogesh Kumar Goyal",pos:"Whole Time Director",info:"He plays an instrumental role in the Marketing and Sales Development of the Company. He has been successful while associating the Company with the worthy projects to the credits of the Company viz. PEC Ltd, Mecon Ltd, etc. Mr. Goyal is holding a Master’s Degree in Commerce."},
{id:"1",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Mr. Mohan Jagdish Agarwal",pos:"Managing Director",info:"He worked as President-Programming and Marketing in Mudra Lifestyle Limited from 2003-2012 and in Bombay Rayon Fashions Limited from 1999-2003 in Production-Planning and Marketing. Currently he is Director of Mega Nirman and Industries Limited, Urja Batteries Limited and Leaf Fashions Private Limited. Further, his broad vision and strategies will help the company to emerge from the challenging situations that the company may come across."},
{id:"2",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Mrs. Payal Sharma",pos:"Independent Director",info:"Mrs. Sharma holds Independent Directorship in the Company. She guides the board for adopting Good Governance practices and updation of the recent legal updations. She is a law Graduate and the Member of Institute of Company Secretaries of India."},
{id:"3",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Mr. P. C. Das",pos:"Independent Director",info:"Mr. Das has more than two decades of experience in Projects, he has handled many Central Government Projects with NHPC /NPCC at Managerial Ranks. He plays an important role in liasioning with various statutory agencies for getting approvals/ permission/ clearances to commence the project. Mr. Das holds Master’s Degree in Humanities."},
{id:"4",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Dr. Mita Sinha",pos:"Independent Director",info:"For successful marketing and brand integration, Dr. Sinha is an ideal, seasoned professional in the field of Marketing Communications, Training & Development. She brings a rich experience of more than 25 years at creating strategic alliances with organization leaders to effectively align with and support key business initiatives. In addition, she stands out in developing new marketing strategies to quickly capitalize on trends and social media."},
{id:"5",img:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg",name:"Mr. Puneet Kumar Mohlay",pos:"Independent Director",info:"Mr. Mohlay holds Independent Directorship in the Company. He guides the board for adopting Audit and Finance Policies. He is the Member of Institute of Chartered Accountants of India."}]

  const showContent=(e)=>{
    setshow(true)
    settitle(directors[e.currentTarget.id].name)
    setinfo(directors[e.currentTarget.id].info)
    setpos(directors[e.currentTarget.id].pos)
  }
  
  return (
    <div>
      {show && <div onClick={()=>setshow(false)} className='w-[100vw] h-[100vh]  bg-black bg-opacity-50 flex items-center justify-center  top-0  fixed z-50'>
      <Bounce top><div className='w-[50rem] h-[30rem] text-gray-700 bg-white drop-shadow-lg shadow-inner rounded-lg p-14 text-lg font-semibold text-center'>
          <h1 className='text-4xl font-bold border-b-4 w-fit mx-auto pb-2 border-orange-500 text-orange-500 '>{title}</h1>
          <p style={{fontFamily:"cursive"}} className='mb-12 text-orange-500 italic'>-{pos}</p>
          <p>{info}</p>
        </div></Bounce>
      </div>}
        <Banner pic={"https://www.tatapower.com/images/bod-1920-372.jpg"} title="BOARD OF DIRECTORS"/>
        <div className='px-20 py-24 bg-gray-100' >
            <h1 className='text-3xl text-gray-600 font-bold mb-12'>BOARD OF DIRECTORS</h1>
            <div className='flex flex-wrap gap-6 flex-1 '>
              {directors.map((director)=>{
                return <div key={director.name} id={director.id} onClick={(e)=>showContent(e)} className="w-[290px] h-[390px] bg-white cursor-pointer drop-shadow-lg group font-medium">
                  <img className='w-full h-[200px] object-cover' src={director.img} alt="director-image"/>
                  <div className='p-8 space-y-4'> 
                    <h1 className='font-semibold'>{director.name}</h1>
                    <div className='text-sm'>{director.pos}</div>
                    <button className='text-sm  flex items-center gap-2'>More<BsArrowRight className='text-orange-500 group-hover:translate-x-2 transition-all duration-300 text-xl'/></button>
                  </div>
                </div>
              })}
            </div>
        </div>
    </div>
  )
}

export default Boardofdirection