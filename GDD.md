## Introduction
Desert Conqueror, a turn-based RPG game built with JavaScript and Phaser 3 Library. A player shall collect coins as many as he/she can avoiding collision with bombs. Once the coin is collected, it will trigger the creation of moving bombs.

## Overview
<div align="center">
  <img src="screenshots/general.png?raw=true" width="100%" height="auto"/>
</div>
#### First Minutes
- the loading message will be shown on the screen while the game is being loaded;
- the main menu will be opened where the user can select several game options;
- user may select the "Play" button which will call the "UserNameInput" scene;
- once the user name is entered, game starts;

#### Gameflow
A player will be created on the left top side of the static desert world scene with 4~5 coins created diagonally, and tree obstacles.
The user can move a player in the scene with keyboard arrow buttons and start to collect coins;
After that bombs will be created in addition to the new coins
A player shall continue to collect coins without colliding with bombs
The game will end when the user will collide with a bomb
Game over scene will be shown with the current user score
a player can then check if he/she was able to make a high score to be in Leader Board score
#### Victory Conditions
The game will continue unless the player hits a bomb. Victory can be considered when the user can land top places in "Leader's dashboard".

#### Number of Players
Currently, there is only one player controlled by one user

#### Controls
A user may control play with keyboard arrow buttons (up, down, left, right) 

#### Technical Aspects
- game is designed for 800x600 screen size 
- game scene zoom 2x
- built with Phaser 3 library
- used API to store user's scores and fetch data to show top users on the "Leaders dashboard"
- 10 scenes of the game
- enabling/disabling background music
- used Webpack JavaScript module bundler

#### Game Assets
- Map background tile image: sand  with trees;
- Bombs and Stars;
- RPG spritesheet with frames;

#### Game Sounds
- Superepic by Alexander Nakarada
- Music promoted by https://www.chosic.com 
- Attribution 4.0 International (CC BY 4.0) 
- https://creativecommons.org/licenses/by/4.0/

## Goals
##### Initial goals (before starting to code):
1. Create hunter in the desert;
2. Hunter shall be able to move (RPG), shot, hit;
3. Trees and other obstacles shall be created in a static "arcade Physics" world;
4. There shall be animals so that hunter can hunt and collect;
5. Enemies shall follow the player and attack him;
6. If a user gets attacked several times (10x), a hunter will die and the game ends;
7. For every successful hunting, the user shall get a 10 score;
8. The current score shall be shown on the main game screen online
9. And the score at the end of the game;
10. Also in Leader's Dashboard if user's score is amoung top 7 other users' scores;

##### Final goals (during/after coding):
**Note: I decided to change my initial plan for the game scenario considering all factors (deadline of project completion, complexity, preference, and others).*
1. Done. Created desert conqueror;
2. Done partially.  The conqueror can move turn-based. But not able to hit or shoot;
3. Done.
4. Done partially. There are coins, instead of animals.
5. Not done. Bombs were created instead.
6. Done partially. A player will die with the first attack.
7. Done partially. For collecting coins.
8. Done.
9. Done.
10. Done.

## Milestones
The first version of the project was developed in 6 days following these milestones
- Day 1: Learn about Phaser 3, read Phaser documentation and following examples
- Day 2: Designing the Game, Create a story for the game, and search all the assets
- Day 3: Code Game Basis, prepare the game scenes and make the player able to move
- Day 4: Create objects to collect, create obstacles in the game scene, add music, add scoring and effects on collision
- Day 5: Implement the scoring system Using an API and Deploy the game.

## Build with
- HTML
- JAVASCRIPT
- PHASER 3
- API
- NPM
- WEBPACK
- Babel
- JEST