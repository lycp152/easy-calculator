var dispNum = 0;
var leftNum = 0;
var nowSymbol = '\0';
var resetFlag = 0;
var deciFlag = 0;
var decitemp = 0.1;

// Cボタン
function C(){
	dispNum = 0;
	resetFlag = 1;

	// dispNumをdisplayに反映
	var object = document.getElementById("display");
	object.innerText = dispNum;
}

// 数字ボタン
function push(buttonNum){
	if(resetFlag == 1){
		// 数字入力を初期化
		dispNum = 0;
		resetFlag = 0;
	}

	if((buttonNum != 0 || dispNum != 0) && dispNum < 100000000){
		dispNum = (dispNum*10) + buttonNum;
	}

	var object = document.getElementById("display");
	object.innerText = dispNum;
}

// 四則演算記号ボタン
function operation(symbol){
	leftNum = dispNum;
	resetFlag = 1;
	nowSymbol = symbol;
}

// =ボタン
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

	// 小数も対応させる必要あり
	if(!(-100000000 < dispNum && dispNum < 100000000)){
		// オーバーフロー時
		dispNum = 'error';
	}
	resetFlag = 1;
	
	var object = document.getElementById("display");
	object.innerText = dispNum;
}
