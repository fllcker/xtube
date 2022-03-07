import './styles/app.css'
import './styles/videos.css'
import Video from "./Video";
import {useEffect, useState} from "react";
import {Route, Routes, Link} from "react-router-dom";
import Watch from "./Watch.js";

export default function Videos() {
    let [allVideos, setAllVideos] = useState([])


    useEffect(() => {
        fetch('http://localhost:7000/videos/')
            .then(response => response.json())
            .then(data => setAllVideos(data));
    }, [])


    /*
    useEffect(async () => {
        const res = await fetch('http://localhost:7000/videos/')
        const data = await res.json()
        setAllVideos(data)
    }, [])

     */


    return (
        <div className="videos">
            {
                allVideos.map(
                    el => <Video videoID={el._id} videoPreviewURL={el.previewURL} videoLink={el.videoURL} videoTitle={el.title} videoViews={el.views}/>
                )
            }



        </div>
    )
}