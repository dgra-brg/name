
//---------------------------------------------------
function autoArray(arrayLength){//возвращает массив от 1 до arrayLength
	if (!isNaN(arrayLength)){
		var array = []
		if(arrayLength > 0){
			for (var i = 0; i < arrayLength; i++) {
				array[i] = i + 1
			}
		}
		else {
			for (var i = 0; i < -arrayLength; i++) {
				array[i] = i - (-arrayLength)
			}
		}
		return array
	};
}
function getNumber(inputId){ //возвращает value по id
	var highNumber = document.getElementById(inputId).value
	if (isNaN(highNumber)){
		alert('Введенное значение не является числом')
	}

	else{
		return highNumber
	}
}
//-------------------------------------------------
function binarySearch(list){

}