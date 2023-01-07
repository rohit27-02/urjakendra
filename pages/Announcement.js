/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from 'react'
const Investor = React.lazy(()=>import('../components/investor'));
import fs from 'fs'
import path from 'path';
import axios from 'axios';

const Announcement = () => {
    const fetchFolder = async () => {
        try {
            const response = await axios.get('https://mega.nz/folder/OFs0xLbQ#y186JttT3_Xd72QjKexbbQ', { responseType: 'arraybuffer' });
            // Save the PDF files to the server
            // fs.writeFileSync('files.zip', response.data);
            // Extract the PDF files from the zip file
            // const unzipped = await unzip(response.data);
            // Display the PDF files
            console.log(response.data)
          } catch (error) {
            console.error(error);
          }
      };
      fetchFolder();
    return (
        <div className='mt-[7vw]'>
            <div className='h-[8vw] overflow-hidden'><img src='/1.png' alt='top-banner'/></div>
            <Suspense fallback={<div>Loading...</div>}>
            {/* <Investor  pdfs={pdfs} folder={"announcements"} /> */}
            </Suspense>
        </div>
    )
}

export default Announcement

// export async function getServerSideProps() {
//     // Fetch data from external API
//     let res=[] ;
//     for (const file of fs.readdirSync(path.resolve("https://mega.nz/folder/OFs0xLbQ#y186JttT3_Xd72QjKexbbQ"))) {
//         res=[...res,file];
  
//     }
  
//     return { props: {pdfs:res} }
//   }