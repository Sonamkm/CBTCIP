import React from 'react'
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* <img src="/restaurant.jpg" alt="restaurant" /> */}
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Making Wonderful Story</h1>
          <p>
            You Dream. We Plan. Enjoy It All.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection