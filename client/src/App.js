import './components/styles/app.css'
import Header from "./components/Header";
import Videos from "./components/Videos";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes, Link} from "react-router-dom";
import Watch from "./components/Watch";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/' element={ <Videos /> }/>

                <Route path='/watch'>
                    <Route path=':videoId' element={ <Watch /> }/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
