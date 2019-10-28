import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard.js";

export default function PersonList() {
    const [people, setPeople] = useState([]);
    console.log(people);
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                setPeople(response.data.results);
                console.log(response.data);
                
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }, []);

    return (
        <div className="people-container">
            {people.length > 0 && people.map((person, id) => {
                return (
                    <PersonCard 
                        key={id}
                        name={person.name}
                        gender={person.gender}
                        hair_color={person.hair_color}
                        mass={person.mass}
                        height={person.height}
                        />
                );
                })}
        </div>
    )
}