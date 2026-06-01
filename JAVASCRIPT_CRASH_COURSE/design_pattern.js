function counter(){

    let count = 0; // private variable

    return{

        increment: function(){
                    count++;
                    },
        decrement: function(){
                    count--;
                    },
        getCount: function(){
                    return count;
                    }
    };
}

const c = counter();
c.increment();
c.decrement();
console.log(c.getCount());
// console.log(c.count());