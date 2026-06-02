import './home.css';
import {useState} from "react"
import LoginPopUp from './popUp';

function HomePage(){

    const [showPopUp, setShowPopUp] = useState(false)

    return(
        <div className= "grid-container">
            <header className="header">
                <button className="logButton" onClick={() =>{setShowPopUp(true)}} >Login</button>
            </header>
            <aside className="sidebar">Menu Lateral</aside>
            <main className='content'>
                <LoginPopUp showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}></LoginPopUp>
                <div className="post">Post 1</div>
                <div className="post">Post 2</div>
            </main>
        </div>
    )
}

export default HomePage;