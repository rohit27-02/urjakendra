/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Investor from '../components/investor';
import fs from 'fs'
import path from 'path';
const Notice = ({ pdfs }) => {
    return (
        <div className='mt-[8vh] md:mt-[7vw]'>
            <div className='h-[8vh] md:h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner' /></div>
            <Investor pdfs={pdfs} folder={"notice of record date & BM"} />
        </div>
    )
}

export default Notice

export async function getServerSideProps() {
    // Fetch data from external API
    let res = [];
   

    for (const file of  fs.readdirSync(path.resolve("\public/notice of record date & BM"))) {
        res = [...res, file]
    }
    res=res.map(function (fileName) {
        return {
            name: fileName,
            time: fs.statSync(path.resolve("\public/notice of record date & BM") + '/' + fileName).mtime.getTime()
        };
    })
        .sort(function (a, b) {
            return b.time - a.time;
        })
        .map(function (v) {
            return v.name;
        });

    return { props: { pdfs: res } }
}