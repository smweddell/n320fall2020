//raindrop class
class Raindrop {
    constructor(){
        this.x = Math.random()*width;
        this.y = Math.random()*-height;
        this.radius = 10;
        this.color = [21, 255, 0];
        this.speed = 1 + Math.random() * 3;
    }
    //updates raindrops movement
    update(){
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }

    draw(){
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }

    // finished(){
    //     if(this.y>100){
    //         return true;
    //     }
    //         else{
    //             return false;
    //         }
        
    // }
}

// raindrops[0] = new Raindrop(10,0,10, [21, 255, 0]);
// raindrops[1] = new Raindrop(20,0,10, [21, 255, 0]);
// raindrops[2] = new Raindrop(30,0,10, [21, 255, 0]);

//ground class
class Ground {
    constructor(x,y,tint){
        this.gx = x;
        this.gy = y;
        this.tint = tint;
    }

    //creates ground
    createground(){
        fill(255,255,this.tint);
        rect(0, 200, this.gx, this.gy);
    }

    //changes ground color
    groundcolor(){
        this.tint = this.tint + 20;
        this.color = [this.tint];        
    }
}

let raindrops = [];
function setup(){
createCanvas(400, 400);
for(var i=0; i<500; i++){
    raindrops.push(new Raindrop());
}
}

//draws raindrops and ground
function draw(){
    background(0,0,0);
    for(var i=0; i<raindrops.length; i++){
        raindrops[i].update();
        raindrops[i].draw();
    }

    //change ground color
    if(raindrops[i]>50){
        tint(0,0,this.tint);
    }
}