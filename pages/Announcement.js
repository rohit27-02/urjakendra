/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from 'react'
const Investor = React.lazy(()=>import('../components/investor'));
import fs from 'fs'
import path from 'path';

const Announcement = ({pdfs}) => {
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner'/></div>
            <Suspense fallback={<div>Loading...</div>}>
            <Investor  pdfs={pdfs} folder={"announcements"} />
            </Suspense>
        </div>
    )
}

export default Announcement

export async function getServerSideProps() {
    // Fetch data from external API
    let res=[] ;
    for (const file of fs.readdirSync(path.resolve("/public/announcements"))) {
        res=[...res,file];
  
    }
  
    return { props: {pdfs:res} }
  }