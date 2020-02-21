var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY -100},
                { "type": "sawblade", "x": 600, "y": groundY -100},
                { "type": "sawblade", "x": 900, "y": groundY -100},
                { "type": "sawblade", "x": 1100, "y": groundY -100},
                { "type": "spikes", "x": 500, "y": groundY -100},
                { "type": "spikes", "x": 700, "y": groundY -100},
                { "type": "spikes", "x": 1000, "y": groundY -100},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        
        function createSawBlade (x ,y){ 
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        
        game.addGameItem(sawBladeHitZone);

        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
     
               
        }


    for (var key = 0; key < levelData.gameItems.length; key++) {
        var gameItemObject = levelData.gameItems[key];
            if (gameItemObject.type === 'sawblade'){
                createSawBlade(gameItemObject.x, gameItemObject.y);
             }
    
        
        if (gameItemObject.type === 'spikes'){
            createSpikes(gameItemObject.x, gameItemObject.y);
        
            
        }
        
    }
     function createSpikes(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
        
            game.addGameItem(sawBladeHitZone);

        var obstacleImage = draw.bitmap('img/spikes.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = 25;
            obstacleImage.scaleX = .5
            obstacleImage.scaleY = .5
        };



        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
