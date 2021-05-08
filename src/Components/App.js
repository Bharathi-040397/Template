import React, { Fragment } from 'react'
import About from './About'
import Curriculum from './Curriculum'
import Features from './Features'
import Header from './Header'
import Payment from './Payment'
import Footer from './Footer'


function App() {
    return (
         <Fragment>
            <Header/>
            <About />
            <Features />
            <Curriculum /> 
            <Payment />
            <Footer/>
        </Fragment>
    )
}

export default App
