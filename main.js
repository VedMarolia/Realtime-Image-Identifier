function setup(){
    canvas = createCanvas(300,300)
    canvas.position(525,300)
    video = createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier("MobileNet",modelLoaded)
}

function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,gotResults)
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotResults(error,result){
    if(error){
        console.log(error)
    }

    else{
        console.log(result)
        document.getElementById("object").innerHTML = "Object : "+ result[0].label
        document.getElementById("accuracy").innerHTML = "Accuracy : " + (result[0].confidence*100).toFixed[2]
    }
}