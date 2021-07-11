function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400,170)

    canvas = createCanvas(550, 550);
    canvas.position(960, 150);
}
function draw(){
    background('#f5df4d')
}