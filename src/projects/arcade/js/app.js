//ensures that syntax is correct
"use strict";
// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = y;
    this.speed = Math.floor(Math.random()*(250-140));
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(this.x >= 505){
      this.x = -100;
      this.speed = Math.floor(Math.random()*(280-160));
    }
    this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Checks collision between Player and Enemies. If hit detected,Player goes back to original position
Enemy.prototype.checkCollision = function() {
  if (player.x < this.x + 78 &&
     player.x + 53 > this.x &&
     player.y < this.y + 55 &&
     53 + player.y > this.y) {
      player.reset();
  }
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 390;
};


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Returns Player back to original position when hit detected or when sucessfully reaching past the water
Player.prototype.reset = function() {
  this.x = 200;
  this.y = 390;
};

//Puts players within bounds of the game tiles
Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'up' :
          if(this.y > 0) {
            this.y = this.y - 80;
          } else {
            this.reset();
          }
          break;
    case 'down' :
    if(this.y < 350) {
          this.y = this.y + 80;
        }
          break;
    case 'left' :
    if(this.x > 0) {
          this.x = this.x - 100;
        }
          break;
    case 'right' :
    if(this.x < 400) {
          this.x = this.x + 100;
        }
          break;
  }

};

Player.prototype.update = function(dt) {
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

for(var i=0; i < 3; i++) {
  allEnemies[i] = new Enemy(i*85+55);
}

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
