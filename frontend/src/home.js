import './home.css';
import {useState} from "react"

function HomePage(){

    const [showPopUp, setShowPopUp] = useState(false)

    return(
        <div className= "grid-container">
            <header className="header">
                <button className="logButton" onClick={() =>{setShowPopUp(true)}} >Login</button>
            </header>
            <aside className="sidebar">Menu Lateral</aside>
            <main>
                <div className="post">Post 1</div>
                <div className="post">Post 2</div>
            </main>
        </div>
    )
}

export default HomePage;