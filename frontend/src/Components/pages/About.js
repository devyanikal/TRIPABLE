import React from 'react'
import './About.css'

function About() {
  const about = require('../images/aboutus.jpeg');
  const founder= require('../images/founder.jpg');
  const slogan= require('../images/slogan.jpg');
  return (
    <div>
      <div className='main-container'>
        <img id='aboutimg' src={about} />
        <u class="underline"><h1 id='header'>ABOUT US</h1></u>
      </div>
      <div class="container">
        <div class="image">
          <img id='img1' src={founder}/>
        </div>
        <div class="text">
        <h1>Founder</h1>
          <h2 class="text">
            <p>At Trip-Able, we've harnessed the power of data and the spirit of innovation to craft a travel experience that's as limitless as your dreams. Our team of final-year BTech Data Science students from Ramdeobaba College of Engineering and Management welcomes you to a world where 'limitations' simply means 'new possibilities.'</p>
            <p>With every click, swipe, and scroll, we're rewriting the story of travel, one unforgettable adventure at a time. 'Exploration knows no bounds,' is not just a tagline for us; it's a mantra we live by. Join us on a journey that transforms 'accessible travel' into 'unstoppable memories' and discover a world where the only limit is your imagination.</p></h2>
        </div>
      </div>
      <div class="container">
        <div class="text">
        <h1>How it started</h1>
          <h2 class="text">
            <p>The problem we found was at hand is lack of comprehensive accessibility information and resources for individuals with disabilities in the tourism industry. In today's society, where inclusivity and diversity are increasingly valued, there is a growing need for accessible travel solutions. </p>
            <p>The tourism industry often overlooks the specific needs of people with disabilities, limiting their opportunities to explore the world. The Trip-Able platform addresses this issue by offering essential information, promoting collaboration with the hospitality sector, and encouraging people with disabilities to travel comfortably. In doing so, it not only caters to an underserved market but also aligns with the broader societal goal of promoting inclusivity and equal opportunities for all.</p>
          </h2>
        </div>
        <div class="image">
            <img id='img1' src={slogan}/>
          </div>
      </div>
      <div class="container">
        <div class="image">
          <img id='img1' src="https://planetabled.com/wp-content/uploads/2017/02/IMG_5881-001.jpg"/>
        </div>
        <div class="text">
        <h1>What we offer</h1>
          <h2 class="text">
            <p>Tripable stands out as a pioneering solution for accessible travel. Its uniqueness lies in its holistic approach to empower individuals with disabilities on their vacation journeys. Tripable provides detailed information on accessible accommodations, tourist attractions, and travel assistance services. </p>
            <p>What truly sets it apart is its inclusive ecosystem, encouraging collaboration with the hospitality sector to ensure a seamless and enjoyable experience for all travelers. </p>
            <p>By bridging the gap between travelers with special needs and the industry, Tripable uniquely promotes inclusive tourism, making it a game-changer in the realm of accessible travel solutions.</p></h2>
        </div>
      </div>
    </div>
  )
}

export default About