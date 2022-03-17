nose_x=""
nose_y=""
function setup(){
canvas=createCanvas(600, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(600, 400);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
       nose_x=results[0].pose.nose.x;
       nose_y=results[0].pose.nose.y;
       console.log(nose_x, nose_y);

    }
    else{
        alert("poseNet can't detect");
    }

}
function draw(){
    image(video, 0, 0, 600, 400);
}
function Takesnapshot(){
    save("Photo.png");
}
function modelLoaded(){
console.log("model poseNet is loaded");

}
