// import React from 'react';
// import '../../App.css';

// export default function Classes() {
//   return <h1 className='products'>Classes</h1>;
// }
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import {Route} from 'react-router-dom'

function Classes() {
  return (
    <div id = 'cards-section' className='cards'>
      <h1>Classes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-multi.jpg'
              text='Multiplayer Game Systems'
              label='SIM 450'
              path='/portfolio#mp'
            />
            
            
            <CardItem
              src='images/img-game.jpg'
              text='Game Engine Architecture'
              label='SIM 335'
              path='/portfolio#ge'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-ai.jpg'
              text='Artificial Intelligence'
              label='CS 455'
              path='/portfolio#ai'
            />
            <CardItem
              src='images/img-art.jpg'
              text='Digital Illustration'
              label='SIM 115'
              path='/portfolio#art'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
  
    </div>
  );
}

export default Classes;
