import React from 'react'

const Person = (props) => (
    <div>
        <h1>{props.LastName}, {props.FirstName}</h1>
        <p>Age: {props.Age}</p>
        <p>Hair Color: {props.HairColor}</p>
    </div>
)

export default Person