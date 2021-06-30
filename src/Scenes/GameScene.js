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
};
