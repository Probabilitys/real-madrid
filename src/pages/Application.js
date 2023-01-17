import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Players from '../pages/Players'
import Header from '../components/Header'
import About from '../pages/About'
import Footer from '../components/Footer'
import Honours from './Honours'
import './Application.css'
import Matches from './Matches'

const Application = () => {

    return (
        <Router basename='/real-madrid'>
            <Header />
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/real-madrid" exact element={<Home />} />
                    <Route path="/honours" exact element={<Honours />} />
                    <Route path="/matches" exact element={<Matches />}/>
                    <Route path="/about" exact element={<About />} />
                    <Route path="/players" exact element={<Players />} />
                </Routes>       
            </div>
            <Footer />
        </Router>
    )
}

export default Application