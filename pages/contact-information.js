/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Investor from '../components/investor';
import fs from 'fs'
const Contact = ({pdfs}) => {
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner'/></div>
            <Investor  pdfs={pdfs} folder={"contact information"} />
        </div>
    )
}

export default Contact

export async function getServerSideProps() {
    // Fetch data from external API
    let res=[] ;
    for (const file of fs.readdirSync("/Users/Rohit Rawat/urjakendra/public/contact information")) {
        res=[...res,file];
  
    }
  
    return { props: {pdfs:res} }
  }