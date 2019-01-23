function range(a, b){
	let result = [];
	if(a<b){
		let a += 1;
		result.push(a); 
	}
	return result;
}
console.log(range(2, 12))