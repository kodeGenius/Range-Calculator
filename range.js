function range(a, b){
	let result = [];
	for(a<b){
		a += 1;
		result.push(a); 
	}
	return result;
}
console.log(range(2, 12))