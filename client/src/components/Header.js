import './styles/header.css'
import './styles/app.css'

export default function Header() {
    return (
        <div className="header">
            <div className="h_logotype">
                <a href="/" className='a'>XTube</a>
            </div>

            <div className="h_search">
                <input type="text" className="h_search_input input"/>
            </div>

            <div className="h_nav">
                <a href="/" className='a'>Explore</a>
                <a href="/" className='a'>Account</a>
            </div>
        </div>
    )
}