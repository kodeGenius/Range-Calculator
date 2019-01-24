function add(...numbers){
	
	for(let i = 0; i < numbers.length; i++){
		numbers += numbers[i];
	}
	return numbers;
}
console.log(add([2,7,8,5,4]));