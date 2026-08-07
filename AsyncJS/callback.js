// callback humesha ek function hota hai
// Callback function woh function hota hai jisey hum as an argument pass kar rahe hote hain
// Higher-Order Functions woh functions hote hain joh ek function(callback) ko as an argument leta hai

function hof(name, callback){
    callback(name);
}

function printName(name){
    console.log("Hello! " + name); // Hello! Esheta
}

hof("Esheta", printName);


function calculate(a,b, callback){
    callback(a,b);
}

function add(a,b){
    console.log(a+b);
}

function subtract(a,b){
    console.log(a-b);
}

function multiply(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}

calculate(90,60,add);   // 150
calculate(90,60, subtract); // 30
calculate(90,60, multiply); // 5400
calculate(90,60, divide); // 1.5

// Callback Hell

function fetchData(data, callback){

    console.log("Fetching data...")
    setTimeout(()=>{
        console.log(data);
        if(callback)// Safe check for optional callback
            callback();
    }, 3000)
    
}

fetchData("1st-Data", () => {
    fetchData("2nd-Data", () => {
        fetchData("3rd-Data");
    });
});

// Amazon Checkout Callback Hell

function checkStock(item, callback){
    setTimeout(()=>{
        console.log("Checked Stock for:", item);
        callback("Order123")
    },3000)
}

function proceedToPayment(orderId, callback){
    setTimeout(()=>{
        console.log("Payment processed for: ",orderId);
        callback("Receipt-1000")
    })
}

function sendEmail(receiptNo, callback){
    setTimeout(()=>{
        console.log("E-mail sent to, receipt no.: ", receiptNo);
        callback("Done!");
    })
}

checkStock("Laptop", function(orderId){
    proceedToPayment(orderId, function(receiptNo){
        sendEmail(receiptNo, function(status){
            console.log("Checkout complete: ",status);
        })
    })
})