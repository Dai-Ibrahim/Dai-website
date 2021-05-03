
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
//resume image
import imgresume from '../images/img-resume.png';
// images for multiplayer

import imgctf from '../images/img-CTF.jpg';
import imgrpg from '../images/img-RPG.jpg';
import imglaser from '../images/img-LaserTag.jpg';

// images for game engines
import imgdi from '../images/img-DI.jpg';
import imgsp from '../images/img-sp.jpg';
import imgir from '../images/img-IR.jpg';
import imgcake from '../images/img-cake.jpg';

//images for  ai
import imgmaze from '../images/img-maze.jpg';
import imgca from '../images/img-ca.jpg';
import imgball from '../images/img-ball.jpg';
import imgtpf from '../images/img-tpf.jpg';

//images for vr

import imgdio from '../images/img-dio.jpg';
import imggaze from '../images/img-gaze.jpg';
import imgui from '../images/img-ui.jpg';
import imgtelep from '../images/img-telep.jpg';
//images for art

import imgart from '../images/img-art.jpeg';
import imgsm from '../images/img-sm.jpg';
import imgiso from '../images/img-iso.jpg';
import imgwitch from '../images/img-witch.jpg';

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
                src={imgresume}
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
              src={imgctf}
              text='A 4 player game where each player competes to get the hat and return it to their base to win.'
              label='Capture the Flag'
              path='https://dai-ibrahim.github.io/CTF/'
            />
             <CardItem
              src={imgrpg}
              text='A multiplayer game where players collect gold and kill enemies. Collect more gold and kill your enemies.'
              label='RPG'
              path='https://dai-ibrahim.github.io/RPG_Prod/'
            /> <CardItem
              src={imglaser}
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
                src={imgdi}
                text='A demonstration of the dependency injection design pattern of programming.'
              label='Dependency Injection'
              path='https://dai-ibrahim.github.io/DependencyInjection/'
            />
          <CardItem
                src={imgsp}
                label='Spacial Partition'
              text='A demonstration of the spacial partition optimization design pattern. Also makes for a cool screensaver.'
              path='https://dai-ibrahim.github.io/CS434_SpatialPartition_Prod/'
          />

          <CardItem
                src={imgir}
                text='A demonstration of the command design pattern. Drive around Garbage city and try not to crash. If you do, you will get an instant replay of your mistakes.'
              label='Instant Replay'
              path='https://dai-ibrahim.github.io/CS434_Instant_Replay/'
          />

          <CardItem
                src={imgcake}
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
                src={imgmaze}
                text='A program that auto generates a maze every second. Makes for a cool screensaver too!'
              label='Auto Mazes'
              path='https://dai-ibrahim.github.io/Mazes_Prod/'
            />
            <CardItem
                src={imgca}
                text='A demostration of collsion avoidance in games.'
              label='Collision Avoidance'
              path='https://dai-ibrahim.github.io/CS455_Collision_Avoidance_Production/'
            />
            <CardItem
                src={imgball}
                text='A demostration of movement and physics prediction in AI. The program predicts the trajectory of the balls as they arrive to their final destination.'
              label='Firing Solutions'
              path='https://dai-ibrahim.github.io/FiringSolution/'
            />
            <CardItem
                src={imgtpf}
                text="A demonstration of tactical pathfinding using Dijkstra's algorithm and weight analysis."
              label='Tactical Pathfinding'
              path='https://dai-ibrahim.github.io/CS455_Tactical_Path_Finding/'
            />
          </ul>
          </div>

          <div id="vr">
          <h1>Virtual Reality</h1>

          <ul className='cards__items'>
            <CardItem
                src={imgdio}
                text='A diorama demonstration following the tutorial form the Unity 2020 Virtual Reality book by Jonathan Linowes.'
              label='Diorama'
              path='https://daibrahim.itch.io/sim350-diorama'
            />
            <CardItem
                src={imggaze}
                text='A gaze-based control demonstration following the tutorial form the Unity 2020 Virtual Reality book by Jonathan Linowes.'
              label='Gaze-Based'
              path='https://daibrahim.itch.io/sim-350-gaze-prod'
            />
            <CardItem
                src={imgui}
                text='A VR music player demonstration building off the tutorial form the Unity 2020 Virtual Reality book by Jonathan Linowes.'
              label='UI'
              path='https://daibrahim.itch.io/sim350-ui-prod'
            />
            <CardItem
                src={imgtelep}
                text='A demonstration of teleportation based on the tutorial form the Unity 2020 Virtual Reality book by Jonathan Linowes.'
              label='Teleportation'
              path='https://daibrahim.itch.io/sim350-teleportation-prod'
            />
          </ul>
          </div>
          <div id="art">
          <h1>Digital Art</h1>

          <ul className='cards__items'>
            <CardItem
                src={imgart}
                text='A vector illustration of Sans from the Undertale video game series.'
              label='Sans'
              path='https://daibrahim.artstation.com/projects/rR6qlE'
            />
            <CardItem
                src={imgsm}
                text='A digital painting of Miles Morales as Spiderman from Spider-Man: Into The Spider-Verse.'
              label='Spider-Man'
              path='https://daibrahim.artstation.com/projects/rABg6e'
            />
            <CardItem
                src={imgiso}
                text='A vector illustration of city in isometric view.'
              label='Iso-City'
              path='https://daibrahim.artstation.com/projects/8l4KQq'
            />
            <CardItem
                src={imgwitch}
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
