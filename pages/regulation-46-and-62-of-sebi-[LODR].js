/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import Router from 'next/router'

const data=[{name:"Details of Company’s business",link:"/company-overview"},
{name:"Terms and conditions of appointment of independent directors",link:"/company-overview"},
{name:"Composition of various committees of board of directors",link:"/company-overview"},
{name:"Code of conduct of board of directors and senior management personnel",link:"/company-overview"},
{name:"Details of establishment of vigil mechanism/Whistle Blower Policy",link:"/company-overview"},
{name:"Criteria of making payment to non-executive directors, if the same has not been",link:"/company-overview"},
{name:"Policy of dealing with related party transactions",link:"/company-overview"},
{name:"Policy for determining material subsidiaries",link:"/company-overview"},
{name:"Details of familiarisation programmes imparted to independent directors including the following details:-",arr:["Number of programmes attended by independent directors (during the year and on a cumulative basis till date)","Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date), and Other relevant details"],link:"/corporate-governance-report/1"},
{name:"The email address for grievance redressal and other relevant details",link:"/contact-us"},
{name:"Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",link:"/contact-us"},
{name:"Financial information including",arr:[" Notice of meeting of the board of directors where financials shall be discussed","Financial results, on conclusion of the meeting of the board of directors where the financial results were approved","Complete copy of annual report including balance sheets, profit and loss account, directors report, corporate governance report etc"],link:"/notice-of-record-date-&-BM"},
{name:"Shareholding pattern",link:"/share-holding-pattern"},
{name:"Details of agreements entered into with the media companies and/or their associates, etc",},
{name:"Schedule of analysts or institutional investors meet and presentations made by the listed entity to analysts or institutional investors Explanation: For the purpose of this clause ‘meet’ shall mean group meetings or group conference calls conducted physically or through digital means, Audio or video recordings and transcripts of post earnings/quarterly calls, by whatever name called, conducted physically or through digital means, simultaneously with submission to the recognized stock exchange(s), in the following manner:",arr:[" the presentation and the audio/video recordings shall be promptly made available on the website and in any case, before the next trading day or within twenty-four hours from the conclusion of such calls, whichever is earlier; the transcripts of such calls shall be made available on the website within five working days of the conclusion of such calls:"]},
{name:"New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change;"},
{name:"items in sub-regulation (1) of regulation 47",arr:["Financials results, as specified in regulation 33, along with the modified opinion(s) or reservation(s), if any, expressed by the auditor:","Notices given to shareholders by advertisement"],link:"/company-overview"},
{name:"All credit ratings obtained by the entity for all its outstanding instruments, updated immediately as and when there is any revision in any of the ratings",link:"/company-overview"},
{name:"Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year",link:"/company-overview"},
{name:"Secretarial Compliance Report",link:"/company-overview"},
{name:"Disclosure of the policy for determination of materiality of events or information required under clause (ii), sub-regulation (4) of regulation 30 of these regulations",link:"/company-overview"},
{name:"Disclosure of contact details of key managerial personnel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s) as required under sub regulation (5) of regulation 30 of these regulations",link:"/company-overview"},
{name:"All such events or information which has been disclosed to Stock Exchanges under regulation 30 of LODR",link:"/company-overview"},
{name:"Statements of deviation(s) or variation(s)",link:"/announcement/1"},
{name:"Dividend distribution policy by the listed entities based on market capitalization"},
{name:"Annual Return as provided under section 92 of the Companies Act, 2013 and the rules made thereunder.",link:"/Annual-report/1"},
{name:"Name of debenture trustee with full contact details"},
{name:"The information, report, notice, call letters, circulars, proceedings etc concerning non- convertible debt securities"},
{name:"All information and reports including compliance report filed by listed entity"},
{name:"Information with respect to the following",arr:["Default by issuer to pay interest or redemption amount"," Failure to create a charge on the assets"]},
{name:"All credit ratings obtained by the entity for all listed non-convertible securities, updated immediately upon revision in the ratings."},
]

const regulation = () => {
  return (
    <div className='mt-[8vh] md:mt-[7vw] '>
        <div className=' w-full h-[8vh] md:h-[8vw] overflow-hidden'><img src='/1.png' className='object-cover w-full' alt='top-banner' /></div>
        <div className='my-[2vw]'>
            <div className='flex md:w-[85%]  mx-auto'>
                <div className='w-[10%] font-semibold text-white bg-sky-600 border p-[1vw] text-center'>Sr. No</div>
                <div className='w-[75%] font-semibold text-white bg-sky-600 border p-[1vw] text-center'>Particulars</div>
                <div className='w-[15%] font-semibold text-white bg-sky-600 border p-[1vw] text-center'>URL</div>
            </div>

           {Object.keys(data).map((i)=>{
            return <div key={i} className='flex md:w-[85%] odd:bg-gray-100 hover:bg-gray-200  mx-auto'>
            <div className='w-[10%]  p-[1vw] border text-center'>{parseInt(i)+1}</div>
            <div className='w-[75%]  p-[1vw] text-sm pl-8 border'>{data[i].name}
            <ol>{data[i].arr && data[i].arr.map((p)=>{return <li key={p} className="list-disc">{p}</li>
            })}
            </ol></div>
            <div className='w-[15%] border p-[1vw] text-3xl'>{data[i].link?<GoLinkExternal onClick={()=>Router.push(`${data[i].link}`)} className='w-fit mx-auto cursor-pointer'/>:<span className='text-base text-gray-500'>Not Applicable</span>}</div>
        </div>
           }) }
            
        </div>
    </div>
  )
}

export default regulation