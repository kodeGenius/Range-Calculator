function add(numbers){
	let output = 0;
	for(let i = 0; i < numbers.length; i++){
		output += numbers[i];
	}
	return output;
}
console.log(add([2,7,8,5,4]));