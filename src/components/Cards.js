import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>See More Beauty Tips!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-6.png'
                    text='Discover the Power of a Flawless Routine!'
                    label= 'SkinCare'
                    path='/Routines'
                    />
                    <CardItem 
                    src='images/img-5.jpg'
                    text='Eyes Deserve the Best Care!'
                    label= 'Eye Routine'
                    path='/Playlista'
                    />
                     <CardItem 
                    src='images/img-4.jpg'
                    text='What´s my type of skin?'
                    label= 'Skin Checker'
                    path='/SkinPage'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards