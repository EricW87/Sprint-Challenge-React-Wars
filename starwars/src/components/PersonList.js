import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard.js";
import styled from 'styled-components'

export default function PersonList() {
    const [people, setPeople] = useState([]);
    const [newURL, setNewURL] = useState('https://swapi.co/api/people');
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    useEffect(() => {
        axios
            .get(newURL)
            .then(response => {
                setPeople(response.data.results);
                setNext(response.data.next);
                setPrev(response.data.previous);          
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }, [newURL]);

    function buttonHandler(type) {
        if(type === 'previous' && prev)
            setNewURL(prev);
        else if(type === 'next' && next)
            setNewURL(next);
    };


    const ContainerDiv = styled.div`
        margin: 0 auto;
        width: 75%;
        display: flex;
        flex-direction: horizontal;
        flex-shrink: 0;
        flex-wrap: wrap;
        justify-content: space-around;
    `;

    const Button = styled.button`
        width: 100px;
        margin: 0 20% 20px 20%;
    `;

    return (
        <ContainerDiv>
            <Button onClick={ () => buttonHandler("previous")}>Previous</Button>
            <Button onClick={ () => buttonHandler("next")}>Next</Button>
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
    );
}