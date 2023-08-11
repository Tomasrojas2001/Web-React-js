import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Nav from "./components/Nav"
import Home from './components/Home'
import Lore from './components/Lore'
import SpiciesRare from './components/SpiciesRare'
import LiveAuction from './components/LiveAuction'
import Partners from './components/Partners'
import {Faqs} from './components/Faqs'
import Footer from './components/Footer'
import "./scss/index.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Roadmap from './components/Roadmap'
import Team from './components/Team'

function App() {
  return (
    <>
      <Router>
        <div className='app-container'>
            <ScrollToTop/>
            <Nav/>
            <Home></Home>
            <SpiciesRare></SpiciesRare>
            <Lore></Lore>
            <Roadmap></Roadmap>    
            <LiveAuction></LiveAuction>
            <Partners></Partners>
            <Faqs></Faqs>
            <Team></Team>
            <Footer></Footer>  
        </div>
      </Router>
    </>
  )
}

export default App;

