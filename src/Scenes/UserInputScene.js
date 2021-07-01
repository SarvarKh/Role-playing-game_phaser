import 'phaser';
import { setplayer } from '../helper/localstorage';

export default class UserInputScene extends Phaser.Scene {
  constructor () {
    super('UserInput');
  }
  
  preload () {
  }

  create () {
    this.message = this.add.text(this.game.config.width * 0.5, 228, 'Input Player Name', {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.message.setOrigin(0.5);

    this.body = document.querySelector("body");
    const canvas = document.querySelector("canvas");

    this.input = this.body.appendChild(document.createElement('input'));
    this.input.setAttribute('id', 'myText');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('autofocus', true);
    this.add.dom(canvas.clientWidth / 2, -canvas.clientHeight / 2, this.input);

    this.nameInput = this.add.sprite(this.game.config.width / 2, 305, 'blueButton2');
    Phaser.Display.Align.In.Center(this.input, this.nameInput);

    this.submit = this.add.image(this.game.config.width / 2, 428, 'blueButton2').setInteractive();
    this.submit.scale = 0.7;
    this.text = this.add.text(0, 0, 'Submit', { fontSize: '25px', fill: '#fff', fontFamily: 'monospace' });
    Phaser.Display.Align.In.Center(this.text, this.submit);

    this.submit.on('pointerdown', () => {
        if (/[a-z]/i.test(this.input.value)) {
          this.scene.start('Game');
          window.localStorage.clear();
          setplayer(this.input.value);
        }
    });
  }
};