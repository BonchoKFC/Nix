import React from 'react'
import {Header, Footer, Blog, Possibility, Features, WhatNix } from './containers';
import { CTA, Brand, Navbar} from './components'
import './App.css'
const app = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatNix/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default app