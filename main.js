
const getInputValueById = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    return inputFieldAmount;
}

const getElementValueById = (elementId) => {
    const getElement = document.getElementById(elementId);
    const getElementText = getElement.innerText;
    const getElementValue = parseFloat(getElementText);
    return getElementValue;
}

const totalExpense = () => {
    const foodAmount = getInputValueById("food-field");
    const rentAmount = getInputValueById("rent-field");
    const clothAmount = getInputValueById("cloth-field");
    const totalExpenseAmount = foodAmount + rentAmount + clothAmount;
    return totalExpenseAmount;
}

document.getElementById("calculate").addEventListener("click", () => {
    const incomeAmount = getInputValueById("income-field");
    const totalExpenseAmount = totalExpense();
    const balance = incomeAmount - totalExpenseAmount;
    const expenseElement = document.getElementById("total-expense");
    const balanceElement = document.getElementById("balance");

    expenseElement.innerText = totalExpenseAmount;
    balanceElement.innerText = balance;


    
});


document.getElementById("save-btn").addEventListener("click", () => {
    const incomeAmount = getInputValueById("income-field");
    const totalExpenseAmount = totalExpense();
    const balance = incomeAmount - totalExpenseAmount;
    const saveAmountValue = getInputValueById("save");
    const totalSaveAmount = (incomeAmount * saveAmountValue) / 100;
    const remainingBalance = balance - totalSaveAmount;
    const savingAmountElement = document.getElementById("saving-amount");
    const remainingTotalBalanceElement = document.getElementById("remaining-balance");

    savingAmountElement.innerText = totalSaveAmount;
    remainingTotalBalanceElement.innerText = remainingBalance;



    const incomeField = document.getElementById("income-field");
    const foodField = document.getElementById("food-field");
    const rentField = document.getElementById("rent-field");
    const clothField = document.getElementById("cloth-field");
    const saveField = document.getElementById("save");

    incomeField.value = "";
    foodField.value = "";
    rentField.value = "";
    clothField.value = "";
    saveField.value = "";

})