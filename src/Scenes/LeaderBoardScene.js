import 'phaser';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor () {
    super('LeaderBoard');
  }
  
  preload () {
    const formData = {
        'player': localStorage.getItem('player'),
        'score': localStorage.getItem('score')
    }
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',    
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
  }

  create () {
    this.message = this.add.text(this.game.config.width * 0.5, 48, "Leader's Dash Board", {
      fontFamily: 'monospace',
      fontSize: 20,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.message.setOrigin(0.5);

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cPmZS72pS3JcSbhdLSEq/scores/', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
        console.log(response);
        response.result.map((e) => {
            console.log(e.score, e.user);
            const row = document.createElement('div');
            const userContent = document.createElement('span');
            const scoreContent = document.createElement('span');
            userContent.textContent = e.user;
            scoreContent.textContent = e.score;
            row.appendChild(userContent);
            row.appendChild(scoreContent);

            // ttt
            this.body = document.querySelector("body");
            const canvas = document.querySelector("canvas");
        
            this.container = this.body.appendChild(row);
            this.container.setAttribute('id', 'container');
            this.add.dom(canvas.clientWidth / 2, -canvas.clientHeight / 2, this.container);
        })
    });
  }
};