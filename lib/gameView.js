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

  };

  View.prototype.bindEvents = function() {

  };

  View.prototype.setUpField = function (options) {
    var enemyField = options.enemyField;
    var myField = options.myField;

    for (var i = 0; i < this.width; i++) {
      enemyField.append("<ul class='col'>");
      for (var j = 0; j < this.height; j++) {
        $("ul.col:last").append("<li></li>")
      }
    };

    for (var i = 0; i < this.width; i++) {
      myField.append("<ul class='col'>");
      for (var j = 0; j < this.height; j++) {
        $("ul.col:last").append("<li data-x='" + j + "' data-y='" + i + "'></li>")
      }
    };
  };

  View.prototype.setUpShips = function(){
    $(".ship-list").sortable();
    for (var i = 0; i < 5; i++) {
      $(".ship-list").append("<li class='ship'>ship " + i + "</li>")
    }
  };
})();
