function range(a, b, c = 1){
	let result = [];
	for(a = a; a <= b; a += c){
		
		result.push(a); 
	}
	return result;
}

console.log(range(2, 12))