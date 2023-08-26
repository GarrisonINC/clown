function setup() {
canvas= createCanvas(400,400);
canvas.center();
video= createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,400,400);
}

function take_snapshot() {
save("snap.png");
}

function modelLoaded() {
    console.log("The model has been loaded");
}

function gotPoses(error,results) {
    if(error) {
console.log(error);
    }
    else {
        console.log(results);
    }
}






