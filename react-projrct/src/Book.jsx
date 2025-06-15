import React from 'react'

export default function Book({name1}) {
    const {name,price} = name1
  return (
    <div>
        <h1>BookName:{name}</h1>
        <h2>BookPrice:{price}</h2>
    </div>
  )
}
