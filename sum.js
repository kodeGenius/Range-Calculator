// function to add
function add(array){
	let output = 0;
	for(let i = 0; i < array.length; i++){
		output += array[i];
	}
	return output;
}
console.log(add([2,7,8,5,4]));
