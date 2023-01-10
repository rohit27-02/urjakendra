/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Investor from '../../components/investor';
import fs from 'fs'
import path from 'path';
import Router from 'next/router';
const Corporate = ({ pdfs, pdfs1, pdfs2, pdfs3, pdfs4 }) => {
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner' /></div>
            <div className='flex gap-[2vw] mt-[2vw] ml-[6vw] font-semibold'>
                <div id='previous' className='cursor-pointer underline underline-offset-[0.7vw] transition-all duration-200 ease-in-out hover:text-orange-500 text-[1.4vw]' onClick={(e) => { parseInt(Router.asPath.split("/")[2]) > 1 ? Router.push(`/corporate-governance-report/${parseInt(Router.asPath.split("/")[2]) - 1}`) : "" }}>Previous</div>
                <div id='next' className='cursor-pointer underline underline-offset-[0.7vw] transition-all duration-200 ease-in-out hover:text-orange-500 text-[1.4vw]' onClick={(e) => { parseInt(Router.asPath.split("/")[2]) < 3 ? Router.push(`/corporate-governance-report/${parseInt(Router.asPath.split("/")[2]) + 1}`) : "" }}>Next</div>
            </div>
            <Investor pdfs={pdfs} folder={"board committee"} />
            <Investor pdfs={pdfs1} folder={"corporate governance report"} />
            <Investor pdfs={pdfs2} folder={"familarization program"} />
            <Investor pdfs={pdfs3} folder={"letter of appointments"} />
            <Investor pdfs={pdfs4} folder={"memorandum & article of association"} />
        </div>
    )
}

export default Corporate

export async function getServerSideProps() {
    // Fetch data from external API
    let res = [];
    let res1 = [];
    let res2 = [];
    let res3 = [];
    let res4 = [];
    for (const file of fs.readdirSync(path.resolve("\public/corporate governance report"))) {
        res1 = [...res1, file];

    }
    for (const file of fs.readdirSync(path.resolve(`\public/board committee`))) {
        res = [...res, file];
    
      }
    for (const file of fs.readdirSync(path.resolve("\public/familarization program"))) {
        res2 = [...res2, file];

    }

    for (const file of fs.readdirSync(path.resolve("\public/letter of appointments"))) {
        res3 = [...res3, file];

    }
    for (const file of fs.readdirSync(path.resolve("\public/memorandum & article of association"))) {
        res4 = [...res4, file];

    }

    return { props: { pdfs: res, pdfs1: res1, pdfs2: res2, pdfs3: res3, pdfs4: res4 } }
}