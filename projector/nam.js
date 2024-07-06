var xCord =0;
var yCord =0;
var scoure =0;
var checker = [];

canvas = document.getElementById("canvas")
context = canvas.getContext("2d");


var name="";
while(name=="")
    name = prompt('Please Enter your name.');
document.getElementById("name").innerHTML +=" "+name;
document.getElementById("player").innerHTML +=name+"  "+"best scoure : ";



var pname=name;

var data=localStorage.getItem("" + pname + "");

document.getElementById("bestScoure").innerHTML=localStorage.getItem("best");
document.getElementById("pbestScoure").innerHTML="Current Score:"+data;






var won=0;
function points(){

    var visible =0;
    for(var i =100 ;i<800 ;i+=100)
        for(var n =100 ;n<600 ;n+=100)
            {
                if(!(xCord>=i-50-20&&xCord<=i-50+20 && yCord>=n-50-20&&yCord<=n-50+20)&& checker[visible]==null){
                    context.beginPath();
                    context.arc(i, n, 15, 0, 2 * Math.PI);
                    context.fill();
                 }
                else{
                    
                    if(checker[visible]==null){
                        scoure+=10+time;
                        if(localStorage.getItem("best")<scoure)
                            localStorage.setItem("best",scoure);

                      var data=localStorage.getItem(""+pname+"");
                       
                        if(data<scoure)
                            localStorage.setItem(""+pname+"",scoure);
                        
                        document.getElementById("scoure").innerHTML=scoure;
                        document.getElementById("bestScoure").innerHTML=localStorage.best;
                        document.getElementById("pbestScoure").innerHTML=localStorage.getItem(""+pname+"");

                        won++;
                        
                        
                    }
                    checker[visible]=true;
                }
                    
                visible++;
            }
    
    
        
 }

var time=30;
function timer(){
    if(time>0){
        time-=1;
        document.getElementById("time").innerHTML ="Time: "+time;
        if(time<1){
            alert("Game over your scour is "+scoure);
            for(var set=0;set<35;set++)
            checker[set]=null;
            xCord =0;
            yCord =0;
            scoure =0;
            won=0;
            time=30;
            drawRight(xCord,yCord);
            document.getElementById("scoure").innerHTML=scoure;
        }
    }
}


//set time down for 1 sc
setInterval( timer,1000);

function drawRight(xCoordinates,yCoordinates){
   
    if(won==35){
          alert("congratulation your scour is "+scoure);

    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle="yellow"
    context.arc(50 + xCoordinates, 50 + yCoordinates, 20, .15 * Math.PI, 1.83 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle="#000"
    
        context.moveTo(50 + xCoordinates,50 + yCoordinates);
        context.lineTo(68 + xCoordinates,40 + yCoordinates);
        context.lineTo(68 + xCoordinates,60 + yCoordinates);

    context.fill();
    context.beginPath();
    context.fillStyle="#310ff0"
    context.arc(55 + xCoordinates, 40 + yCoordinates, 2, 0, 2 * Math.PI);
    context.fill();
    points();
    
    
    
   
}

function drawLeft(xCoordinates,yCoordinates){
    
    if(won==35){
          alert("congratulation your scour is "+scoure);

    }
    
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle="yellow"
    context.arc(50 + xCoordinates, 50 + yCoordinates, 20, .83 * Math.PI, 1.15 * Math.PI,true);
    context.fill();
    context.beginPath();
    context.fillStyle="#000"
   
        context.moveTo(50 + xCoordinates,50 + yCoordinates);
        context.lineTo(32 + xCoordinates,40 + yCoordinates);
        context.lineTo(32 + xCoordinates,60 + yCoordinates);

    context.fill();
    context.beginPath();
    context.fillStyle="#0f99f0"
    context.arc(45 + xCoordinates, 40 + yCoordinates, 2, 0, 2 * Math.PI);
    context.fill();
    points();
}

function drawUp(xCoordinates,yCoordinates){
    if(won==35){
          alert("congratulation your scour is "+scoure);

    }
    
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle="yellow"
    context.arc(50 + xCoordinates, 50 + yCoordinates, 20, 1.65 * Math.PI, 1.35 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle="#000"
        context.moveTo(50 + xCoordinates,50 + yCoordinates);
        context.lineTo(40 + xCoordinates,32 + yCoordinates);
        context.lineTo(60 + xCoordinates,32 + yCoordinates);
    context.fill();
    context.beginPath();
    context.fillStyle="#b30ff0"
    context.arc(40 + xCoordinates, 45 + yCoordinates, 2, 0, 2 * Math.PI);
    context.fill();
    points();
}


function drawDown(xCoordinates,yCoordinates){
    
     if(won==35){
          alert("congratulation your scour is "+scoure);

    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle="#fdd835"
    context.arc(50 + xCoordinates, 50 + yCoordinates, 20, .65 * Math.PI, .35 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle="#000"
        context.moveTo(50 + xCoordinates,50 + yCoordinates);
        context.lineTo(40 + xCoordinates,68 + yCoordinates);
        context.lineTo(60 + xCoordinates,68 + yCoordinates);
    context.fill();
    context.beginPath();
    context.fillStyle="#F9167D"
    context.arc(40 + xCoordinates, 55 + yCoordinates, 2, 0, 2 * Math.PI);
    context.fill();
    
    points();
}

drawRight(xCord,yCord);

//set event when button down 
document.onkeydown = checkKey;

// control arrows up down ... to move pac man
function checkKey(e) {

    e = e || window.event;
    var speed =5;
    if (e.keyCode == '38') {
        // up arrow
        if(yCord>20-50){
            yCord-=speed;
            drawUp(xCord,yCord);
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(yCord<600-20-50){
            yCord+=speed;
            drawDown(xCord,yCord);
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
        if(xCord>20-50){
            xCord-=speed;
            drawLeft(xCord,yCord);
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if(xCord<800-20-50){
            xCord+=speed;
            drawRight(xCord,yCord);
        }
    }

}