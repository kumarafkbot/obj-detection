img="";
status = "";
objects=[];
function setup() {
    canvas=createCanvas(640,420)
    canvas.center()
    object_detector = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded() {
    console.log("Model Is loaded");
    status = true
    objectDetector.detect(img , gotresults)

}

function gotresults(error , results) {
    if (error) {
        console.log(error)
        objects = results;
    } else {
      console.log(results)  
    }
}


function preload() {
    img = loadImage("dog_cat.jpg")
}

function draw(){
image(img,0,0,640,420)
if(status != "")
{
    for(i = 0; i < objects.length; i++ )
    {
      document.getElementById("status").innerHTML = "Status : Object Detected";
    
      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(object[i].label + " " + percent + "%", objects[i].x , objects[i].y);
      noFill();
      stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height); }
}

}

