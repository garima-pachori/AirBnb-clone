import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/card"
import data from "./data"
import "./style.css"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}