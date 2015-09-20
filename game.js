/**
 * Created by stogr on 21.09.2015.
 */
$(function () {
    var gameField = $('canvas#gameField');
    var game = new Game(gameField);
    game.start();
});

function Game(gameField) {
    var context = gameField[0].getContext('2d');
    var realWidth = gameField.width();
    var realHeight = gameField.height();
    var map = new Map(context, realWidth, realHeight);
    var ball = new Ball(10, 10, context);

    this.draw = function () {
        context.fillStyle = '#000000';
        context.strokeStyle = '#000000';
        context.clearRect(0, 0, realWidth, realHeight);
        context.strokeRect(0, 0, realWidth, realHeight);
        map.draw();
        ball.draw();
    };

    this.update = function () {
        map.update();
        ball.update();
    };

    this.start = function () {
        var self = this;
        setInterval(function () {
            self.update();
        }, 20);

        setInterval(function () {
            self.draw();
        }, 20);
    };
}


