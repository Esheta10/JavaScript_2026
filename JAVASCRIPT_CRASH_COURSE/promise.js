function createOrder(cart){
    return new Promise(function(resolve, reject) {

        if(!cart || cart.length===0)
            reject(new Error("Cart is empty"));

        setTimeout(() => resolve("ORDER_"+Date.now()), 500);
    });
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        console.log("Processing payment for: "+orderId);
        
        setTimeout(() => resolve({
                                    orderId,
                                    amount: 100.00, 
                                    paid: true
                                })
                , 1000);
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve){
        console.log("Order summary: ", paymentInfo);
        resolve("Order summary shown");
    })
}

createOrder(["shoes","socks"])
    .then(function(orderId){
        console.log("Order created: ", orderId);
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log("Payment complete: ", paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(function(message){
        console.log(message);
    })  
    .catch(function(err){
        console.log("Order flow failed");
    })
    .finally(function(){
        console.log("Order flow complete");
    });
