import React, {useEffect, useState} from 'react';
import './styles/watch.css'
import './styles/app.css'
import {Link, useHistory, useLocation, useParams} from "react-router-dom";

const Watch = (props) => {
    // const qry = (window.location.pathname).split('/');
    // const videoID = qry[2];

    const params = useParams()
    const videoID = params.videoId;

    let [currectVideo, setCurrectVideo] = useState({})

    useEffect(() => {
        fetch('http://localhost:7000/videos/videoById/' + videoID)
            .then(response => response.json())
            .then(data => setCurrectVideo(data));
    }, [])

    return (
        <div className="videoWatch">
            <div className="videoPlayerDiv">
                <iframe width="1280" height="706" src={currectVideo.videoURL}
                        title="Video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>

            <div className="description">
                <h1>{currectVideo.title}</h1>
            </div>

        </div>
    );
};

export default Watch;