
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import {Route} from 'react-router-dom'

function Portfolio() {
  return (
    <div id = 'cards-section' className='cards'>
      <h2>Dai's Portfolio</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <div id='resume'>
            
            <h1 >RÉSUMÉ</h1>
  
            <ul className='cards__items'>
              <CardItem
                src='images/img-resume.png'
                text="Dai's Engineering Resume"
                label='PDF'
                path='https://drive.google.com/file/d/1-bMMrbKJdjhkO21A2-0VWjsWFWZ3f-fG/view?usp=sharing'
              />
            </ul>
            </div>
          <div id='mp'>
            
          <h1 >Multiplayer Game Systems</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/img-CTF.jpg'
              text='A 4 player game where each player competes to get the hat and return it to their base to win.'
              label='Capture the Flag'
              path='https://dai-ibrahim.github.io/CTF/'
            />
             <CardItem
              src='images/img-RPG.jpg'
              text='A multiplayer game where players collect gold and kill enemies. Collect more gold and kill your enemies.'
              label='RPG'
              path='https://dai-ibrahim.github.io/RPG_Prod/'
            /> <CardItem
              src='images/img-LaserTag.jpg'
              text="A battle royle game but with a twist! It's actually laser tag."
              label='Battle Royale'
              path='https://dai-ibrahim.github.io/BattleRoyale_Production/'
            />
          </ul>
          </div>
    
          <div id="ge"> 
          <h1>Game Engines and Design Patterns</h1>
          <ul className='cards__items'>           
          <CardItem
              src='images/img-DI.jpg'
              text='A demonstration of the dependency injection design pattern of programming.'
              label='Dependency Injection'
              path='https://dai-ibrahim.github.io/DependencyInjection/'
            />         
          <CardItem
              src='images/img-sp.jpg'
              label='Spacial Partition'
              text='A demonstration of the spacial partition optimization design pattern. Also makes for a cool screensaver.'
              path='https://dai-ibrahim.github.io/CS434_SpatialPartition_Prod/'
          />
                      
          <CardItem
              src='images/img-ir.jpg'
              text='A demonstration of the command design pattern. Drive around Garbage city and try not to crash. If you do, you will get an instant replay of your mistakes.'
              label='Instant Replay'
              path='https://dai-ibrahim.github.io/CS434_Instant_Replay/'
          />
                      
          <CardItem
              src='images/img-cake.jpg'
              text='A demonstration of the decorator design pattern. You get to be a baker and make the cakes of your dreams! (well only like 2 types of cakes)'
              label='Decorator Pattern'
              path='https://dai-ibrahim.github.io/Cake_Decorator/'
          />
          </ul>
          </div>

          <div id="ai"> 
          <h1>Artificial Intellegence</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/img-maze.jpg'
              text='A program that auto generates a maze every second. Makes for a cool screensaver too!'
              label='Auto Mazes'
              path='https://dai-ibrahim.github.io/Mazes_Prod/'
            />
            <CardItem
              src='images/img-ca.jpg'
              text='A demostration of collsion avoidance in games.'
              label='Collision Avoidance'
              path='https://dai-ibrahim.github.io/CS455_Collision_Avoidance_Production/'
            />
            <CardItem
              src='images/img-ball.jpg'
              text='A demostration of movement and physics prediction in AI. The program predicts the trajectory of the balls as they arrive to their final destination.'
              label='Firing Solutions'
              path='https://dai-ibrahim.github.io/FiringSolution/'
            />
            <CardItem
              src='images/img-tpf.jpg'
              text="A demonstration of tactical pathfinding using Dijkstra's algorithm and weight analysis."
              label='Tactical Pathfinding'
              path='https://dai-ibrahim.github.io/CS455_Tactical_Path_Finding/'
            />
          </ul>
          </div>
        
          <div id="art"> 
          <h1>Digital AAArt</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/img-art.jpeg'
              text='A vector illustration of Sans from the Undertale video game series.'
              label='Sans'
              path='https://daibrahim.artstation.com/projects/rR6qlE'
            />
            <CardItem
              src='images/img-sm.jpg'
              text='A digital painting of Miles Morales as Spiderman from Spider-Man: Into The Spider-Verse.'
              label='Spider-Man'
              path='https://daibrahim.artstation.com/projects/rABg6e'
            />
            <CardItem
              src='images/img-iso.jpg'
              text='A vector illustration of city in isometric view.'
              label='Iso-City'
              path='https://daibrahim.artstation.com/projects/8l4KQq'
            />
            <CardItem
              src='images/img-witch.jpg'
              text='A digtal painting of a witch cooking in front of a window.'
              label='Little Witch'
              path='https://daibrahim.artstation.com/projects/PoJLQ8?album_id=2129994'
            />
          </ul>
          </div>
    
          
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
