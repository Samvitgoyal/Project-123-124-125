text_box= "";
difference = 0;
rightWristX = 0;
leftWristX = 0;
noseX = 0;
noseY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(200,200)
  
    canvas = createCanvas(550, 500);
    canvas.position(900,200);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
    }
}


function draw()
{
    background('#4269f5');
    fill('#fff');
    stroke('#048BA8')
    text('Hi',noseX,noseY);
    textSize(difference);
}
