import {useState} from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from   "./Main.js"
import HomePage from "./home.js"

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/reactPage"  element = {<Main />} />
            <Route path="/" exact element = {<HomePage />} />

        </Routes>
        </BrowserRouter>
    )
}

export default App;