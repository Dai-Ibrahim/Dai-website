// import React from 'react';
// import '../../App.css';

// export default function Classes() {
//   return <h1 className='products'>Classes</h1>;
// }
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import imgmulti from '../images/img-multi.jpg';
import imggame from '../images/img-game.jpg';
import imgaiclass from '../images/img-ai.jpg';
import imgartclass from '../images/img-art.jpg';

import {Route} from 'react-router-dom'

function Classes() {
  return (
    <div id = 'cards-section' className='cards'>
      <h1>Classes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {imgmulti}
              text='Multiplayer Game Systems'
              label='SIM 450'
              path='/portfolio#mp'
            />


            <CardItem
              src= {imggame}
              text='Game Engine Architecture'
              label='SIM 335'
              path='/portfolio#ge'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {imgaiclass}
              text='Artificial Intelligence'
              label='CS 455'
              path='/portfolio#ai'
            />
            <CardItem
              src= {imgartclass}
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
