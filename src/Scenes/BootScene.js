import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/game_logo.png');
  }

  create () {
    this.scene.start('Preloader');
  }
};
