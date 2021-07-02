/* eslint no-undef: 0 */
import 'phaser';
import Button from '../Objects/Button';
import { getPlayers } from '../helper/fetchingData';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.message = this.add.text(this.game.config.width * 0.5, 48, "Leader's Dash Board", {
      fontFamily: 'monospace',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.message.setOrigin(0.5);

    this.menuButton = new Button(this, 400, 100, 'blueButton1', 'blueButton2', 'Menu', 'Title');

    const topplayers = async (url) => {
      try {
        const players = await getPlayers(url);
        let y = 110;
        for (let i = 0; i < 12; i += 1) {
          const text = this.add.text(this.game.config.width * 0.5, (y += 50), `${players[i].user}: ${players[i].score}`, {
            fontFamily: 'monospace',
            fontSize: 20,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center',
          });
          text.setOrigin(0.5, 0.5);
        }
        return players;
      } catch (error) {
        return error;
      }
    };

    topplayers('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/');
  }
}