define( function(){

	function initializeArray(){
		var myA = [];
		for(var iter = 0; iter < 100; iter++){
			myA.push([]);
			myA[iter][0] = iter;
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