import 'phaser';

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
