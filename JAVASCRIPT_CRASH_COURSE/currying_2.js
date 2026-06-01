function multiply(x){
    return function(y){
        return x*y;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));