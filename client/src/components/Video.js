import './styles/app.css'
import './styles/videos.css'
import { Routes, Route, Link } from 'react-router-dom'
import Watch from "./Watch";

export default function Video(props) {

    return (
        <div className="video">
            <div className="video_preview">
                <img src={props.videoPreviewURL} alt={props.videoPreviewURL} className="video_preview_img"/>
            </div>
            <div className="video_mini_desc">
                <Link to={'/watch/' + props.videoID} className="video_title_p" >
                    {props.videoTitle}
                </Link>
                <p className="video_views_p">{props.videoViews} views</p>
            </div>
        </div>
    )
}