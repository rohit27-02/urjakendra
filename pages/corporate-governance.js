/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Investor from '../components/investor';
import fs from 'fs'
import path from 'path';
const Corporate = ({pdfs,pdfs1,pdfs2,pdfs3,pdfs4,pdfs5}) => {
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner'/></div>
            <Investor  pdfs={pdfs1} folder={"board committee"} />
            <Investor  pdfs={pdfs} folder={"corporate governance report"} />
            <Investor  pdfs={pdfs2} folder={"familarization program"} />
            <Investor  pdfs={pdfs3} folder={"letter of appointments"} />
            <Investor  pdfs={pdfs4} folder={"memorandum & article of association"} />
            <Investor  pdfs={pdfs5} folder={"other disclosure"} />
        </div>
    )
}

export default Corporate

export async function getServerSideProps() {
    // Fetch data from external API
    let res=[] ;
    let res1=[] ;
    let res2=[] ;
    let res3=[] ;
    let res4=[] ;
    let res5=[] ;
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../public/corporate governance report"))) {
        res=[...res,file];
  
    }
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../public/board committee"))) {
        res1=[...res1,file];
  
    }
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../public/familarization program"))) {
        res2=[...res2,file];
  
    }
  
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../public/letter of appointments"))) {
        res3=[...res3,file];
  
    }
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../memorandum & article of association"))) {
        res4=[...res4,file];
  
    }
    for (const file of fs.readdirSync(path.resolve(__dirname,"../../../other disclosure"))) {
        res5=[...res5,file];
  
    }
  
    return { props: {pdfs:res,pdfs1:res1,pdfs2:res2,pdfs3:res3,pdfs4:res4,pdfs5:res5} }
  }