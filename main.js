function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function draw(){
    background('33FFF6');
    }
    
    function preload(){
    
    }
    
    function modelLoaded(){
        console.log("PoseNet is totally not initialized");
    
    }
    
    function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
    }