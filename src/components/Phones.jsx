import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Phones() {

    const phones = useLoaderData();
    console.log(phones);
  return (
    <div> 
        <h2>All Phones here {phones.length}</h2>
        {
            phones.map(phone=> <li key={phone.id}>
                <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                </li>)
        }
    </div>
  )
}
