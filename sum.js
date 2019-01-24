function add(number){
	
	for(let i = 0; i < number.length; i++){
		number += number[i];
	}
	return number;
}
console.log(add([2,7,8,5,4]));