import React from "react"
import grid from '../images/Photo-grid.png';

export default function Hero() {
    return (
        <section>
            <img src={grid} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--header">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}