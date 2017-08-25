function Pipe(){
    this.x = width;
    this.y = 0;
    this.space = 50;

    this.newSpace  = function(x){
        this.space = Math.floor(random(120)) + 120;
        this.y = Math.floor(random(height / 4)) + 60;

        this.x += x * 400;

        if( Math.random() * 10 > 5)
            this.y *= -1;
    };

    this.shift = function(){
        this.x -= 5;
    };

    this.show = function(){
        fill(51);
        image(pipet,this.x,this.y > 0 ? 0 : this.y,53,321 + (this.y > 0 ? this.y : 0));


        image(pipeb,this.x,this.y+321+this.space,53,321 - (this.y > 0 ? 0 : this.y));
    };
}