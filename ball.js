function Ball(x, y, context, color) {
    this.position = $V([x, y]);
    context.fillStyle = color;
    this.draw = function () {
        context.beginPath();
        context.arc(this.position.e(1), this.position.e(2), 10, 0, 2 * Math.PI);
        context.fill();
    };
}
Ball.prototype = GameObject;