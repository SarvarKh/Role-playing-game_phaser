import 'phaser';
import config from '../Config/config';

export default class LeadersDashboardScene extends Phaser.Scene {
  constructor () {
    super('LeadersDashboard');
  }

  create () {
    this.gameOverText = this.add.text(0, 0, 'Game Over', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Leaders Dashboard:', { fontSize: '26px', fill: '#fff' });
    // this.dashboard = this.add.text(0,0, "Leaders Dashboard");
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.gameOverText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.gameOverText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -100,
      ease: 'Power1',
      duration: 5000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};