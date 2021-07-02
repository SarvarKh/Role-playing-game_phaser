import 'phaser';

export default {
  type: Phaser.AUTO, // eslint-disable-line no-undef
  parent: 'phaser-example',
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false, // set to true to view zones
    },
  },

};
