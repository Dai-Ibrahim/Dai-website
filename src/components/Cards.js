import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import imgctf from './images/img-CTF.jpg';
import imgdi from './images/img-DI.jpg';
import imgmaze from './images/img-maze.jpg';
import imgart from './images/img-art.jpeg';


import {Route} from 'react-router-dom'

function Cards() {
  return (
    <div id = 'cards-section' className='cards'>
      <h1>Featured Work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {imgctf}
              text='A 4 player game where each player competes to get the hat and return it to their base to win.'
              label='Multiplayer Game'
              path='https://dai-ibrahim.github.io/CTF/'
            />
            
            
            <CardItem
              src= {imgdi}
              text='A demonstration of the dependency injection design pattern of programming.'
              label='Design Patterns '
              path='https://dai-ibrahim.github.io/DependencyInjection/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {imgmaze}
              text='A program that auto generates a maze every second. Makes for a cool screensaver too!'
              label='AI'
              path='https://dai-ibrahim.github.io/Mazes_Prod/'
            />
            <CardItem
              src= {imgart}
              text='A vector illustration of Sans from the Undertale video game series.'
              label='Art'
              path='https://daibrahim.artstation.com/projects/rR6qlE'
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

export default Cards;
