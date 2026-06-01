function memoize(){

    let cache = {};

    return function(n){

        if(cache[n]){
            console.log("From cache: "+cache[n]);
        }
        cache[n] = n*n;

        console.log("From calculated: "+ cache[n]);
    };
}

const square = memoize();
console.log(square(5));
console.log(square(5));