import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    this.load.image('logo', 'assets/game_logo6.png');
  }

  create () {
    this.scene.start('World');
  }
  // preload () {
  //   // map tiles
  //   this.load.image('tiles', 'assets/map/spritesheet.png');
        
  //   // map in json format
  //   this.load.tilemapTiledJSON('map', 'assets/map/map.json');
        
  //   // our two characters
  //   this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  // }

  // create () {
  //   // start the WorldScene
  //   this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

  //   // Options
  //   this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');

  //   // Credits
  //   this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

  // }
};
