var monHealth =100;
var hitpower;

var mPosition = 2;
var pPosition = 2;

document.getElementById("p"+pPosition).innerHTML = "<img src='../assets/stickman.png' id='stickman'>";


var monsterPlace = function(){
	mPosition =  Math.floor(Math.random()*3)+1;
	console.log(mPosition);
	document.getElementById("m"+mPosition).innerHTML = "<img src='../assets/blue.png' id='blue'>" ;
	setTimeout(function(){
		document.getElementById("m"+mPosition).innerHTML = "";
		monsterPlace();
	}, 1000)
}

monsterPlace();


var monster = ["<img src='../assets/imgres.jpg' id='blue'>" 
"<img src='../assets/stickman.png' id='stickman'>",
]


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
    	console.log("hit");
    	hit();
    }
    else if (e.keyCode == '37') {
       console.log("left");
       leftmove();
    }
    else if (e.keyCode == '39') {
       console.log("right");
       rightmove();
    }

}





var hit = function() {
	if (pPosition == mPosition){
		hitpower = Math.floor(Math.random()*11);
		monHealth -= hitpower;

		if (monHealth <= 0) {
			document.getElementById('display').innerHTML = "Your monster is dead!";
			document.getElementById("m"+mPosition).innerHTML = "";
			monsterPlace();
			monHealth =100;

		} else {
			document.getElementById('display').innerHTML = "Your monster is at "  + monHealth;
		}
	} else {
		document.getElementById('display').innerHTML = "You Miss!";
	}
}

var rightmove = function(){
	if (pPosition==3) {
		document.getElementById('display').innerHTML = "Can't move that way.";
	} else {
		document.getElementById("p"+pPosition).innerHTML = "";	
		pPosition++;
		document.getElementById("p"+pPosition).innerHTML = "<img src='../assets/stickman.png' id='stickman'>";
	}
}

var leftmove = function(){
	if (pPosition==1) {
		document.getElementById('display').innerHTML = "Can't move that way.";
	} else {
		document.getElementById("p"+pPosition).innerHTML = "";	
		pPosition--;
		document.getElementById("p"+pPosition).innerHTML = "<img src='../assets/stickman.png' id='stickman'>";
	}
}







