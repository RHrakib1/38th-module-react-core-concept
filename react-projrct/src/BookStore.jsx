import React from 'react'
import Book from './Book'

export default function BookStore({stor}) {
  return (
    <div>
        <h3>books:{stor.length}</h3>
        {
            stor.map(data=><Book name1={data}></Book>)
        }
    </div>
  )
}
