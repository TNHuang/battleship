(function() {
  if (typeof Game === "undefined") {
    window.Game = {};
  }


  var View = Game.View = function($el) {
    this.width = 10;
    this.height = 10;

    //in-game board
    this.board = new Game.Board({ height: this.height, width: this.width });
    //actual html rendering of the board
    this.setUpField({enemyField: $("ul.enemy-ocean"), myField: $("ul.my-ocean") });
    this.setUpShips();
    this.bindEvents();
    this.updateBoard();
    this.currentSide = "my";
  };

  View.prototype.bindEvents = function() {
    $(".fleet-container").on("click", "li", function(event){
      var target = $(event.currentTarget);
      var x = target.data("x");
      var y = target.data("y");
      var side = target.data("side");
      console.log("(", x, ", ", y, ") side:", side);

      if (side === this.currentSide) {
        console.log("it's not your turn yet");
      } else {
        if (this.currentSide === "my"){
          this.currentSide = "enemy";
          this.board.myVolley.push([y, x]);
        }else {
          this.currentSide = "my"
          this.board.enemyVolley.push([y, x]);
        }
      }
      this.updateBoard();
    }.bind(this));
  };



  View.prototype.setUpField = function (options) {
    var enemyField = options.enemyField;
    var myField = options.myField;

    for (var i = 0; i < this.width; i++) {
      enemyField.append("<ul class='col'>");
      for (var j = 0; j < this.height; j++) {
        $("ul.col:last").append("<li data-x='" + j + "' data-y='" + i + "' data-side='enemy'></li>")
      }
    };

    for (var i = 0; i < this.width; i++) {
      myField.append("<ul class='col'>");
      for (var j = 0; j < this.height; j++) {
        $("ul.col:last").append("<li data-x='" + j + "' data-y='" + i + "' data-side='my'></li>")
      }
    };
  };

  View.prototype.setUpShips = function(){
    $(".ship-list").sortable();
    for (var i = 0; i < 5; i++) {
      $(".ship-list").append("<li class='ship'>ship " + i + "</li>")
    }
  };

  View.prototype.updateBoard = function(){
    $(".my-ocean li").removeClass();
    $(".enemy-ocean li").removeClass();

    var myShips = this.board.myShips;
    var enemyShips = this.board.enemyShips;
    var myVolley = this.board.myVolley;
    var enemyVolley = this.board.enemyVolley;

    myShips.forEach( function(coord){
      $(".my-ocean ul.col:nth-child(" + (coord[0] + 1) + ") li:nth-child(" + (coord[1] + 1) + ")").addClass("is-ship");
    });

    enemyShips.forEach( function(coord){
      $(".enemy-ocean ul.col:nth-child(" + (coord[0] + 1) + ") li:nth-child(" + (coord[1] + 1) + ")").addClass("is-ship");
    });

    myVolley.forEach (function(coord){
      $(".enemy-ocean ul.col:nth-child(" + (coord[0] + 1) + ") li:nth-child(" + (coord[1] + 1) + ")").removeClass("is-ship").addClass("volley");
    });

    enemyVolley.forEach (function(coord){
      $(".my-ocean ul.col:nth-child(" + (coord[0] + 1) + ") li:nth-child(" + (coord[1] + 1) + ")").removeClass("is-ship").addClass("volley");
    });
  };
})();
