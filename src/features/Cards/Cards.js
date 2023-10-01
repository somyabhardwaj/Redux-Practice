import React from 'react'
import { useSelector } from 'react-redux'


function Cards() {
    const cards = useSelector((state)=>state.cards);

      return ( cards.map((card)=>(

        <div className='card'>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
        </div>

      ))
    
  )
}

export default Cards
