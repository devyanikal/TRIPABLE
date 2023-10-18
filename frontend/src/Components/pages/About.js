import React from 'react'
import './About.css'

function About() {
  const about = require('../images/aboutus.jpeg');
  const founder= require('../images/founder.jpg');
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
            <p>Imagine as a child never been on a family holiday. Watching your class mates going for one in summer and winter vacations, and your travels limited to just school picnics or grandparents houses.</p>
            <p>Hi, I am Neha Arora, and I was that child. My father is blind and mother is a wheelchair user. The thought of traveling to unknown places raises a lot of questions in the minds of a person with disability. Inaccessibility, lack of basic amenities and societal prejudice are some of the barriers they face.</p>
            <p>When we grew up and started to travel, every attempt was a surprise. You travel 2000 miles only to realize that the place is not accessible & you can’t go in, or it does not offer the kind of pleasant experience you came for. Thanks to insensitivity and social stigmas, which persist in the community.</p></h2>
        </div>
      </div>
      <div class="container">
        <div class="text">
        <h1>How it started</h1>
          <h2 class="text">
            <p>I realized that if we as a family are facing such issues, others might also be feeling the same. And they might not be as fortunate as us to be pushed by family and friends to come out of house and enjoy life to the fullest.</p>
            <p>When I looked for solutions there was none. I started talking to more and more people with disability and their dreams, apprehensions, and experiences of travel, both for work and leisure. This process of research and surveys continued for two years, before I took the final plunge to leave my corporate career at Adobe and started Planet Abled.</p>
            <p>A first of its kind unique travel sojourn of the planet where people of all disabilities and without disabilities travel together.</p>
          </h2>
        </div>
        <div class="image">
            <img id='img1' src="https://planetabled.com/wp-content/uploads/2017/02/S2-e1496236084191.jpg"/>
          </div>
      </div>
      <div class="container">
        <div class="image">
          <img id='img1' src="https://planetabled.com/wp-content/uploads/2017/02/IMG_5881-001.jpg"/>
        </div>
        <div class="text">
        <h1>What we offer</h1>
          <h2 class="text">
            <p>Planet-Abled provides accessible travel solutions and leisure excursions for people with different disabilities. There are over a billion people with different disabilities in the world, but the percentage of them travelling is miniscule, owning to lack of accessible travel options available.</p>
            <p>Planet Abled identified this gap and came forward to give them the freedom to travel no matter what their disability is! Whether they want to experience a small facet of the city they are in or they want to travel across multiple cities of their interest, we have something unique, safe and enjoyable for them.</p>
            <p>Planet Abled is the only organization in the world, where we mix people of all disabilities together into one group and travel together.</p></h2>
        </div>
      </div>
    </div>
  )
}

export default About