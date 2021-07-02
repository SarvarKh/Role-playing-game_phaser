import 'phaser';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor () {
    super('LeaderBoard');
  }
  
  preload () {
    // this.formData = {
    //     'user': localStorage.getItem('player'),
    //     'score': localStorage.getItem('score')
    // }
    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',    
    //     },
    //     body: JSON.stringify(this.formData)
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Success:", data);
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     })
  }

  create () {
    this.message = this.add.text(this.game.config.width * 0.5, 48, "Leader's Dash Board", {
      fontFamily: 'monospace',
      fontSize: 30,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.message.setOrigin(0.5);

    const getData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.result;
      } catch (error) {
        return error;
      }
    };

    const sortPlayers = (arr) => {
      arr.sort((a, b) => b.score - a.score);
      return arr;
    };

    const getPlayers = async (url) => {
      const arr = await getData(url);
      if (typeof (arr) === 'object') sortPlayers(arr);
      return arr;
    };

    const topplayers = async (url) => {
      try {
        const players = await getPlayers(url);
        let y = 60;
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
    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/', {mode: 'cors'})
    // .then(function(response) {
    // return response.json();
    // })
    // .then(function(response) {
    //     console.log(response.result);
    //     const players = response.result;
    //     for (let i = 0; i < 12; i += 1) {
    //       console.log(players[i].user, players[i].score);
    //       const text = this.add.text(this.game.config.width * 0.5, (y += 50), `${players[i].user}: ${players[i].score}`, {
    //         fontFamily: 'monospace',
    //         fontSize: 30,
    //         fontStyle: 'bold',
    //         color: '#ffffff',
    //         align: 'center',
    //       });
    //       text.setOrigin(0.5, 0.5);
    //     }
    // });
  }
};