
// login button event handler
const loginBtn = document.querySelector('#login');

loginBtn.addEventListener("click", function (){
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";
    const transactionArea = document.querySelector('#transaction-area');
    transactionArea.style.display = "block";
})

// deposit button event handler

const depositBtn = document.querySelector("#addDeposit");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.querySelector("#depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    document.querySelector("#depositAmount").value = "";

    updateSpan("#currentDeposit", depositNumber);

    updateSpan("#currentBalance", depositNumber);

})

// withdraw event handler

const withdrawBtn = document.querySelector("#addWithdraw");
withdrawBtn.addEventListener("click", function () {

    const withdrawNumber = getWithdrawNumber("#withdrawAmount")

    updateSpan("#currentWithdraw", withdrawNumber);
    updateSpan("#currentBalance", -1 * withdrawNumber);

    document.querySelector("#withdrawAmount").value = "";
})

function getWithdrawNumber(id){
    const withdrawAmount = document.querySelector(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpan(id, depositNumber){
    const current = document.querySelector(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.querySelector(id).innerText = totalAmount;
}
