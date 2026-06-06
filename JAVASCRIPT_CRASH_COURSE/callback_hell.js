// Real-world e-commerce example : order flow

// create order -> cart , orderId
// proceed to payment -> paymentInfo
// show order summary -> balance
// update wallet balance
// show confirmation email


const cart = ["shoes", "T-shirt","mobile-phone"];

function createOrder(cart, callback){
    
    const orderId = "ORDER-123";
    console.log("Creating order for: " + cart);
    callback(orderId);
}

function proceedToPayment(orderId, callback){

    const paymentInfo = {
        orderId : orderId,
        amount : 3000,
        status: "success"
    };
    console.log("Processing payment for: " + orderId);
    callback(paymentInfo);
}

function showOrderSummary(paymentInfo, callback){

    const balance = 5000 - paymentInfo.amount;
    console.log("Showing summary for payment: ", paymentInfo);
    callback(balance);
}

function updateWalletBalance(balance, callback){
    console.log("New wallet balance: " + balance);
    callback();
}

function sendConfirmationEmail(callback){
    console.log("Sending confirmation e-mail...");
    callback();
}

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(balance){
            updateWalletBalance(balance, function(){
                sendConfirmationEmail(function(){
                    console.log("Order complete");
                });
            });
        });
    });
});