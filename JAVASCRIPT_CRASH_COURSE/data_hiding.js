function bankAccount(){

    let balance = 1000;

    return{

        deposit: function(amount){
            balance += amount;
        },
        withdraw: function(amount){
            balance -= amount;
        },
        show: function(amount){
            console.log("Balance: " + balance);
        }
    };
}

const account = bankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.show());