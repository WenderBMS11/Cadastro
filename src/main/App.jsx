import React from 'react'
import './App.css'

import Logo from '../componente/template/Logo'
import Nav from '../componente/template/Nav'
//Main, nele já import o Header
import Main from '../componente/template/Main'
import Footer from '../componente/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>