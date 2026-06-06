// map
const arr = [1,2,3,4,5];

const doubled = arr.map(num => num * 2);

console.log(doubled);

// filter

const evens = arr.filter(num => num%2 == 0);

console.log(evens);


// reduce

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);