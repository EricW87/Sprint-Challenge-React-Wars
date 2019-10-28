import React from "react";

const PersonCard = props => {
    return (
        <div className="person-container">
            <div>{props.name}</div>
            <div className="stats">
                <div>Gender: {props.gender}</div>
                <div>Hair Color: {props.hair_color}</div>
                <div>Mass: {props.mass}</div>
                <div>Height: {props.height}</div>

            </div>

        </div>
    )
}

export default PersonCard;