import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard.js";
import styled from 'styled-components'

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

    const ContainerDiv = styled.div`
        margin: 0 auto;
        width: 75%;
        display: flex;
        flex-direction: horizontal;
        flex-shrink: 0;
        flex-wrap: wrap;
        justify-content: space-around;
    `;

    return (
        <ContainerDiv>
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
        </ContainerDiv>
    )
}