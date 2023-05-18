// 1. Deposit some money

/* function deposit() {
    
}
deposit(); */
const prompt = require("prompt-sync")();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter the deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid Deposit Amount, Try Again");
        }
        else {
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount)


// 2. Determine the number of lines to bet on
// 3. Collect the bet amount
// 4. Spin the slot machine
// 5. Check if the use won
// 6. Dispatch Money
// 7. Pla again.