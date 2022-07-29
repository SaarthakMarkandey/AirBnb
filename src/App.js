import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


const cards=data.map(item => {
    return (<Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
    openSpots={item.openSpots}
    />)
})

export default function App(){
    return(
        <div>
            <NavBar/>
            <Hero/>
            <section className="cards--list">
            {cards}
            </section>
            

            
        

            {/* <Card
                 img="image 12.png"
                 rating="5.0"
                 reviewCount={6}
                 country="USA"
                 title="Life Lessons with Katie Zaferes"
                 price={136}
            /> */}
        </div>
    )
}