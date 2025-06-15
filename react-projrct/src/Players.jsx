import React from 'react'

export default function Players({ player }) {
    const {name, age, sallary} = player
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>Age:{age}</p>
            <span>Sallary:{sallary}</span>
        </div>
    )
}
