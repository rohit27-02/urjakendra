import React, { useState, useEffect } from 'react'
import Investor from '../components/investor';

const Announcement = () => {
    const [name, setname] = useState("");
    const [tag, settag] = useState("");
    const [file, setfile] = useState();

    const pdfs = ["Outcome of BM 15.10.pdf", "Scrutinizer Report with Voting Result.pdf", "Proceedings of 30th AGM.pdf",
        "ATTENDANCE SLIP FOR ATTENDING 30TH  AGM.pdf", "Reg 47 Newspaper publication","Outcome of the BM 12.08.2022.pdf"]
    const submit = async (e) => {
        e.preventDefault()
        console.log(file)
        let data = { name, tag, file };
        let res = await fetch(`/api/addpdf`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        })
        console.log(res)
    }
    return (
        <div className='mt-[7vw]'>
            <Investor pdfs={pdfs} />
        </div>
    )
}

export default Announcement