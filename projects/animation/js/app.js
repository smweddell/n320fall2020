var purple = document.getElementsByClassName("purple");
var blue = document.getElementsByClassName("blue");
var title = document.getElementsByClassName("title");

TweenMax.to(title, { duration: .5, y: 20});

for(let i = 0; i < blue.length; i++) {
    TweenLite.from(blue[i], 
        { duration: (i+1) * .4, x: -50, alpha:0, delay: i*.5} 
    );
}

for(let i = 0; i < purple.length; i++) {
    TweenLite.from(purple[i], 
        { duration: (i+1) * .4, x: -500, alpha:0, delay: i*.4} 
    );
}
