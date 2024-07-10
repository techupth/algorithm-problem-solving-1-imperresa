function twoSum(numbers, target) {
	let total = []
	for(let i =0 ;i<numbers.length;i++){
		for(let j =i+1;j<numbers.length;j++){
			console.log(numbers[i],numbers[j]);
			if(numbers[i]+numbers[j] === target){
				total.push([i,j])
			}
		}
		
	}
	return total
};
let numbers =  [2,7, 11, 15 ]
let result = twoSum(numbers,9)
console.log(result);