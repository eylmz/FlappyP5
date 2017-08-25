function Ball(){
    this.x = 20;
    this.y = 20;
    this.gravity = 1;
    this.velocity = 0;
    this.up = 0;

    this.show = function(){
        if(this.up === 0) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }else{
            this.up -= this.velocity;
            this.velocity--;
            this.y -= this.velocity;
        }

        image(bird,this.x,this.y,76,56);

    };

    this.control = function(pipe){


    };

    this.space = function(){
        this.up = 40;
        this.velocity = 13;
    };
}