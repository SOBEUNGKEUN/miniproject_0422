import React, { useEffect, useState } from "react";
import Planet from './Planet/Planet'
import classes from './PlanetsList.module.css'

const Planets = [
    // {
    //     id: "book1",
    //     name: "수성",
    //     description:
    //         "A story of Santiago, an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream off the coast of Cuba",
    //     author: "Ernest Hemingway",
    //     price: 10.57,
    // },
    // {
    //     id: "book2",
    //     name: "금성",
    //     description:
    //         "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    //     author: "F.Scott Fitzgerald",
    //     price: 12.97,
    // },
]
const PlanetList = () => {
    const [planets, setplanets] = useState(Planets);

    const PlanetList = planets.map(planet => (
        <Planet
            key={planet.id}
            name={planet.name}
            koName={planet.koName}
            description={planet.description}
            revcycle={planet.revcycle}
            rotationcycle={planet.rotationcycle}
            avgtemperature={planet.avgtemperature}
            maxtemperature={planet.maxtemperature}
            mintemperature={planet.mintemperature}
            satellite={planet.satellite}
        />
    ));
    useEffect(() => {

        fetch('https://plants-4f0e7-default-rtdb.firebaseio.com/planet.json')
            .then(response => response.json())
            .then(responseData => {

                const planetData = [];
                console.log(responseData);
                for (const key in responseData) {
                    console.log(key);
                    const planet = {
                        id: key,
                        name: responseData[key].name,
                        koName: responseData[key].koName, 
                        description: responseData[key].description,
                        revcycle: responseData[key].revcycle,
                        rotationcycle: responseData[key].rotationcycle,
                        avgtemperature: responseData[key].avgtemperature,
                        maxtemperature: responseData[key].maxtemperature,
                        mintemperature: responseData[key].mintemperature,
                        satellite: responseData[key].satellite,
                    };
                    planetData.push(planet);
                }
                setplanets(planetData);
            });
    }, []);

    return (
        <section className={classes.planets}>
            <>
                <ul>{PlanetList}</ul>
                <br></br> <br></br>
            </>
        </section>
    )
}

export default PlanetList;