(function() {
  if (typeof Game === "undefined") {
    window.Game = {};
  };

  var Coord = function(pos){
    this.x = pos[0];
    this.y = pos[1];
  };

  var Board = Game.Board = function(options){
    this.height = options.height;
    this.width = options.width;

    this.initializeGrids();
    this.initializeShips();

    this.myVolley = [];
    this.enemyVolley = [];

  };

  Board.prototype.initializeGrids = function(){
    this.myGrid = this.setUpGrid();
    this.enemyGrid = this.setUpGrid();
  };

  Board.prototype.setUpGrid = function(){
    this.grid = new Array( this.height );
    for (var i = 0; i < this.height; i++) {
      this.grid[i] = new Array( this.width);
    }
  };

  Board.prototype.initializeShips = function(){
    //carrier 5, battleship 4, submarine 3, cruiser 2, frigate 2
    this.myShips = [ [0,0], [0,1], [0,2], [0,3],  [6,9], [7,9], [8,9], [9,9]];

    // this.myGrid[0][0].prop = "s";
    // this.myGrid[0][1].prop = "s";
    // this.myGrid[0][2].prop = "s";
    // this.myGrid[0][3].prop = "s";
    this.enemyShips = [ [0,0], [1,0], [2,0], [3,0]];
    // this.enemyGrid[0][0].prop = "s";
    // this.enemyGrid[1][0].prop = "s";
    // this.enemyGrid[2][0].prop = "s";
    // this.enemyGrid[3][0].prop = "s";
    // this.setTile([0,0], "battleship", [1,0], this.myGrid)
    // this.setTile([1,0], "battleship", [1,0], this.enemyGrid)
  };

  Board.prototype.setUpShip = function(){

  };

  Board.prototype.setTile = function (startPos, shipType, dir, grid) {
    if (shipType === "battleship") {
      var shipLength = 4;
    }

    // for (var i = 0; i < shipLength; i++) {
    //   grid.tile = "s"
    // }
  };

})();
