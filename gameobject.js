var GameObject = {
    position: $V([0, 0]),
    speed: $V([0, 0]),
    update: function () {
        this.position = this.position.add(this.speed);
    },
    draw: function () {
        throw '"draw" method should be initiated!';
    }
};