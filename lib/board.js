(function() {
  if (typeof Game === "undefined") {
    window.Game = {};
  };

  var Coord = Game.Coord = function(pos) {
    this.x = pos[1];
    this.y = pos[0];
  };

  var Board = Game.Board = function(options){
    this.height = options.height;
    this.width = options.width;

    this.initializeGrid();
  };

  Board.prototype.initializeGrid = function(){
    this.grid = new Array( this.height );
    for (var i = 0; i < this.height; i++) {
      this.grid[i] = new Array( this.width);
    }
  };

})();
