import React, { useState, useEffect } from 'react'

const Announcement = () => {
    const [pdfs, setpdfs] = useState();
    const [name, setname] = useState();
    const [tag, settag] = useState();
    const [file, setfile] = useState();
    const fetchpdf = async () => {
        let res = await fetch(`/api/getpdf`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            }, body: "announcement"
        })
        setpdfs(res.pdf)
    }
    useEffect(() => {
        fetchpdf();
    }, []);

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
    const upload = async (e) => {
        let formData = new FormData();
        formData.append("fileupload", fileupload.files[0]);
        await fetch('/api/upload', {
            method: "POST",
            body: formData
        });
    }
    return (
        <div className='mt-40'>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => setname(e.target.value)} placeholder='name'></input>
                <input onChange={(e) => settag(e.target.value)} placeholder='tag'></input>
                <input id='fileupload' onChange={(e) => upload(e)} type={'file'} ></input>
                <input type={'submit'}></input>
            </form>
        </div>
    )
}

export default Announcement