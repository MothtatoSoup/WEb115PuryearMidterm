
const loan = document.getElementById("LoanAmount").value
const downPay = document.getElementById("dPay").value
const loanTerm = document.getElementById("loanTerm").value
const subButton = document.getElementById("button")
const moneyInfo = document.getElementById("textSpot")
const payPlan = document.getElementById("loop")

const princLoanAmnt = loan - downPay
const annIntrest = 5.75
const monthIntrest = annIntrest / 12


subButton.addEventListener("click", Check)

function Check(){
    if(loanTerm != 15 || 30){
        window.alert("Invalid Loan Term")
    }else if(loanTerm == 15 || 30){
        Calculate
    }else{
        window.alert("Error!!")
    }
}

function Calculate(){
    let month = 1
    let monthPay = ((monthIntrest * princLoanAmnt) / (1 - Math.pow(1 + monthIntrest, -totalMonths))).toFixed(2)
    let totalIntPaid = (monthPay * totalMonths) - princLoanAmnt
    let loanCost = princLoanAmnt + totalIntPaid
    let IntPaid = loan * monthIntrest
    let principalPaid = monthPay - IntPaid
    let remLoan = loan - monthPay
    if(loanTerm == 15){
        while(month <= 12*15){

            month++
        }
    }else if(loanTerm == 30){
        while(month <= 12*30){
            month++
            
        }
    }else{
        window.alert("Something went wrong")
    }
    payPlan.innerHTML = "Monthly Pay: $" + monthPay + "Intrest pay: $" + IntPaid + "Principal Pay: $" + principalPaid + "Remaining Loan Balance : $" + remLoan
}