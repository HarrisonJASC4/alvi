function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        fill(0,200,100,50);
        rect(this.x, this.y, 30, 20);
    }
    this.move = function(dir) {
        this.y += dir;
    }
}