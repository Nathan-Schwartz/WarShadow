define( function(){

//Should I really be using sessionStorage?


	function initializeArray(){
		var myA = [];
		for(var iter = 0; iter < 100; iter++){
			myA.push([]);
		}
		for(var iters = 0; iters < 100; iters++){
			myA[iters][0] = iters;
		}
		sessionStorage.setItem('array', JSON.stringify(myA));
	};
	
	function getArray(){
		var arr = sessionStorage.getItem('array');
		return JSON.parse(arr);
	};

	function sendArray(myArray){
		sessionStorage.setItem('array', JSON.stringify(myArray));
	};
	
	return{
		initializeArray : initializeArray,
		getArray : getArray,
		sendArray : sendArray
	};
});