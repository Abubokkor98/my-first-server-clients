import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Phone() {
    const phone = useLoaderData();
    console.log(phone);
  return (
    <div>
        <h2>{phone.name}</h2>
        <img src={phone.image} alt="" />
        <p>{phone.description}</p>
    </div>
  )
}
