import React from "react";
import styled from "styled-components"


const PersonCard = props => {
    const PersonContainer = styled.div`
        width: 40%;
        margin-top: 20px;
        margin-bottom: 20px;
        border: solid black 1px;
    `;

    const NameDiv = styled.div`
        font-size: 2rem;
        font-weight: bold;
    `;

    const StatsDiv = styled.div`
        padding: 2% 5%;
        font-size: 1.5rem;
    `;

    return (
        <PersonContainer>
            <NameDiv>{props.name}</NameDiv>
            <StatsDiv>
                <div>Gender: {props.gender}</div>
                <div>Hair Color: {props.hair_color}</div>
                <div>Mass: {props.mass}</div>
                <div>Height: {props.height}</div>

            </StatsDiv>

        </PersonContainer>
    );
}

export default PersonCard;