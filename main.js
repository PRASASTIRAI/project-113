function preload(){

}

function setup(){
    canvas=createCanvas(670,430);
    canvas.position(140,450);
    video=createCapture(VIDEO);
    video.hide();
    
    tint_colour="";
}

function draw(){
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(255,0,0);
stroke(255,0,0);
circle(50,390,80);


fill(255,0,0);
stroke(255,0,0);
circle(605,50,80);

fill(255,0,0);
stroke(255,0,0);
circle(605,390,80);

rect(80, 40, 500, 20);
rect(40, 40, 20, 320);
rect(80, 390, 500, 20);
rect(590, 40, 20, 320);

    image(video,230,150,220,200);
    tint(tint_colour);
}

function take_snapshot(){
save('my pictures.png');
}

function FilterTint(){
    tint_colour=document.getElementById("filter_colour").value;
}