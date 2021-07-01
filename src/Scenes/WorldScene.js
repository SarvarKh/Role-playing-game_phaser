import 'phaser';
import { highscore } from '../helper/localstorage';

var score = 0;
var scoreText;
var gameOverText;

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('World');
  }

  preload() {
      // map tiles
      this.load.image('tiles', 'assets/map/sand_tileset4.png');
      
      // map in json format
      this.load.tilemapTiledJSON('map', 'assets/map/map.json');
      
      // our two characters
      this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });

      // load star image 
      this.load.image('star', 'assets/star6.png');

      // load bomb image
      this.load.image('bomb', 'assets/bomb.png');
  }

  create () {
    this.cameras.main.zoom = 2;
      // create the map
      var map = this.make.tilemap({ key: 'map' });
      
      // first parameter is the name of the tilemap in tiled
      var tiles = map.addTilesetImage('spritesheet', 'tiles');
      
      // creating the layers
      var grass = map.createStaticLayer('Grass', tiles, 0, 0);
      var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
      
      // make all tiles in obstacles collidable
      obstacles.setCollisionByExclusion([-1]);
      
      //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
          frameRate: 10,
          repeat: -1
      });
      
      // animation with key 'right'
      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
          frameRate: 10,
          repeat: -1
      });
      this.anims.create({
          key: 'up',
          frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
          frameRate: 10,
          repeat: -1
      });
      this.anims.create({
          key: 'down',
          frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
          frameRate: 10,
          repeat: -1
      });        

      // our player sprite created through the phycis system
      this.player = this.physics.add.sprite(50, 100, 'player', 6);
      
      // don't go out of the map
      this.physics.world.bounds.width = map.widthInPixels;
      this.physics.world.bounds.height = map.heightInPixels;
      this.player.setCollideWorldBounds(true);
      
      // don't walk on trees
      this.physics.add.collider(this.player, obstacles);

      // limit camera to map
      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.roundPixels = true; // avoid tile bleed
  
      // user input
      this.cursors = this.input.keyboard.createCursorKeys();
      
      // where the enemies will be
      this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
      for(var i = 0; i < 30; i++) {
          var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
          var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
          // parameters are x, y, width, height
          this.spawns.create(x, y, 20, 20);            
      }        

      // add stars
      this.stars = this.physics.add.group({
          key: 'star',
          repeat: 4,
          setXY: { x: Phaser.Math.RND.between(8, 128), y: Phaser.Math.RND.between(30, 150), stepX: Phaser.Math.RND.between(80, 120), stepY: Phaser.Math.RND.between(0, 100) }
        });

        
      this.physics.add.collider(this.stars, this.obstacles);
      this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
      
      // Scores
      scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '16px', fill: '#000' });

      // Bombs
      this.bombs = this.physics.add.group();

      this.physics.add.collider(this.bombs, this.obstacles);

      this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
  }

  hitBomb(player, bomb) {
      this.physics.pause();
  
      this.player.setTint(0xff0000);
      this.player.anims.play("turn");
      highscore(score);
      //   GameOver
    //   gameOverText = this.add.text(200, 150, 'Game Over', { fontSize: '48px', fill: '#000' });
      this.scene.start('LeadersDashboard');
  }

  collectStar (player, star) {
      star.disableBody(true, true);

      score += 10;
      scoreText.setText('Score: ' + score);

  
          star.enableBody(true, star.x, Phaser.Math.RND.between(30, 150), true, true);
          var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);  
      
          var bomb = this.bombs.create(x, Phaser.Math.Between(16, 200), 'bomb');
          bomb.setBounce(1);
          bomb.setCollideWorldBounds(true);
          bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  }

  update(time, delta){
  //    this.controls.update(delta);
  
      this.player.body.setVelocity(0);

      // Horizontal movement
      if (this.cursors.left.isDown)
      {
          this.player.body.setVelocityX(-80);
      }
      else if (this.cursors.right.isDown)
      {
          this.player.body.setVelocityX(80);
      }

      // Vertical movement
      if (this.cursors.up.isDown)
      {
          this.player.body.setVelocityY(-80);
      }
      else if (this.cursors.down.isDown)
      {
          this.player.body.setVelocityY(80);
      }        

      // Update the animation last and give left/right animations precedence over up/down animations
      if (this.cursors.left.isDown)
      {
          this.player.anims.play('left', true);
          this.player.flipX = true;
      }
      else if (this.cursors.right.isDown)
      {
          this.player.anims.play('right', true);
          this.player.flipX = false;
      }
      else if (this.cursors.up.isDown)
      {
          this.player.anims.play('up', true);
      }
      else if (this.cursors.down.isDown)
      {
          this.player.anims.play('down', true);
      }
      else
      {
          this.player.anims.stop();
      }
  }
}

