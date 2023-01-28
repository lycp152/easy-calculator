var dispNum = 0;
var leftNum = 0;
var nowSymbol = '\0';
var resetFlag = 0;

function C(){
	dispNum = 0;
	resetFlag = 1;
	operNow = 0;
	
	var object = document.getElementById("display");
	object.innerText = dispNum;
}

function push(buttonNum){
	
	if(resetFlag == 1){
		dispNum = 0;
		resetFlag = 0;
	}

	if((buttonNum != 0 || dispNum != 0) && dispNum < 100000000){
		dispNum = (dispNum*10) + buttonNum;
	}

	var object = document.getElementById("display");
	object.innerText = dispNum;
}

function operation(symbol){
		
	leftNum = dispNum;
	resetFlag = 1;
	nowSymbol = symbol;
}

function equal(){

	switch(nowSymbol){
		case '+':
			dispNum = leftNum + dispNum;
			break;
		case '-':
			dispNum = leftNum - dispNum;
			break;
		case '*':
			dispNum = leftNum * dispNum;
			break;
		case '/':
			dispNum = leftNum / dispNum;
			break;
		default:
			break;
	}

	if(dispNum >= 100000000){
		dispNum = 'error';
	}
	resetFlag = 1;
	
	var object = document.getElementById("display");
	object.innerText = dispNum;
}