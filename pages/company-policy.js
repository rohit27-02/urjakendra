/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Investor from '../components/investor';
import fs from 'fs'
import path from 'path';
const Policy = ({pdfs}) => {
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner'/></div>
            <Investor  pdfs={pdfs} folder={"company policy"} />
        </div>
    )
}

export default Policy

export async function getServerSideProps() {
    // Fetch data from external API
    let res=[] ;
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../public/company policy"))) {
        res=[...res,file];
  
    }
  
    return { props: {pdfs:res} }
  }