function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5094VCUvz/model.json",modelReady);

}

function modelReady(){
 classifier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
        console.log(error);
    }
        else{
            console.log(result);

            random_number_r =Math.floor(Math.random()*255)+1;
            random_number_g =Math.floor(Math.random()*255)+1;
            random_number_b =Math.floor(Math.random()*255)+1;
            document.getElementById("Spansound").innerHTML=result[0].label;
            document.getElementById("Spanaccuracy").innerHTML=(result[0].confidence*100).toFixed(2)+" %";
            document.getElementById("Spansound").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            document.getElementById("Spanaccuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
            if(result[0].label=="Clap"){
                document.getElementById("Alien1").src="aliens-01.gif";
                document.getElementById("Alien2").src="aliens-02.png";
                document.getElementById("Alien3").src="aliens-03.png";
                document.getElementById("Alien4").src="aliens-04.png";
            }
            else if(result[0].label=="Snap"){
                document.getElementById("Alien1").src="aliens-01.png";
                document.getElementById("Alien2").src="aliens-02.gif";
                document.getElementById("Alien3").src="aliens-03.png";
                document.getElementById("Alien4").src="aliens-04.png";
            }
            else if(result[0].label=="Bell"){
                document.getElementById("Alien1").src="aliens-01.png";
                document.getElementById("Alien2").src="aliens-02.png";
                document.getElementById("Alien3").src="aliens-03.gif";
                document.getElementById("Alien4").src="aliens-04.png";     
        }
        else {
            document.getElementById("Alien1").src="aliens-01.png";
            document.getElementById("Alien2").src="aliens-02.png";
            document.getElementById("Alien3").src="aliens-03.png";
            document.getElementById("Alien4").src="aliens-04.gif";
        }
    }
}