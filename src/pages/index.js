import React from "react"
import Spline from '@splinetool/react-spline'
import houseState1 from "../houseState1.png"
import houseState3 from "../houseState3.png"

function SplineState1() {
  return (
    <div class= "SplineState">
    <Spline scene="https://prod.spline.design/VlmQZKJJWnfu2Ftp/scene.splinecode" />
    </div>
  );
}

function Hero() {
  return (
      <div className = "hero">
        <img src = {houseState1}></img>
        <div className = "heroText">
        <h1>Find your next home</h1>
        <h1 className = "big144px orange">TODAY</h1>
        </div> 
      </div>  
  )
}

function WhatWeOffer() {
  return (
    <section>
      <div class = "what-we-offer">
        <h1>What we <span className="orange">offer...</span></h1>
        <div class = "offCenterText">
          <p>Single Family Homes in the Cincinnati area (Norwood, Montgomery, and Mason).</p>
          <p>Beautifully updated homes with great locations.</p>
          <p>Tenant pays for all utilities. Residence is a non-smoking property. Pet on case by case basis with fee. Minimum of 700+ credit score required.</p>
        </div>
      </div>
    </section>
    )
}

function ViewPropertyList() {
  return (
    <div class = "view-property-list">
      <section>
      <div class = "image-section">
      </div>
      <a href = "./property-list">
          <button className = "available-homes-button">
            <h2>Available Homes</h2>
          </button>
      </a>
        </section>
    </div>
    )
}


function Home() {
  return (
    <div className="Home">
      <div class = "page-background">
        <section>
        <div className="Titlebar-offset"></div> 
        </section>
        <SplineState1 />
          <Hero />
        <WhatWeOffer />
        <ViewPropertyList />
      </div>
    </div>
  );
}


export default Home;