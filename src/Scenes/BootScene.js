import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/game_logo1.png');
  }

  create () {
    this.scene.start('Preloader');
  }
};
