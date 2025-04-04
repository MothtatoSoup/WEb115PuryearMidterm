console.log("JavaScript")


const loan = document.getElementById("LoanAmount").value
const downPay = document.getElementById("dPay").value
const loanTerm = document.getElementById("loanTerm").value
const subButton = document.getElementById("button")
const moneyInfo = document.getElementById("textSpot")
const payPlan = document.getElementById("loop")
const end = document.getElementById("end")

const princLoanAmnt = loan - downPay
const annIntrest = 5.75
const monthIntrest = annIntrest / 12


subButton.addEventListener("click", Check)

function Check(){
    if(loanTerm.value != 15 || 30){
        window.alert("Invalid Loan Term")
        console.log("Invalid Loan Term")
    }else if(loanTerm == 15 || 30){
        Calculate
        console.log("Calculating...")
    }else{
        window.alert("Error!!")
        console.log("Error")
    }
}

function Calculate(){
    let month = 1
    let monthPay = ((monthIntrest * princLoanAmnt) / (1 - Math.pow(1 + monthIntrest, -totalMonths))).toFixed(2)
    let totalIntPaid = (monthPay * totalMonths) - princLoanAmnt
    let loanCost = princLoanAmnt + totalIntPaid
    let IntPaid = loan * monthIntrest
    let principalPaid = monthPay - IntPaid
    let remLoan = loan
    moneyInfo.innerHTML = "Loan Term: " + loanTerm + " Years <br/>"
    console.log("now calculating")
    while(remloan >= 0){
         payPlan.innerHTML = "Monthly Pay: $" + monthPay + "Intrest pay: $" + IntPaid + "Principal Pay: $" + principalPaid + "Remaining Loan Balance : $" + remLoan + "<br/>"
         remLoan = remLoan - monthPay
         IntPaid = remloan * monthIntrest
         principalPaid = monthPay - IntPaid
        
    end.innerHTML = "This ends the Amortization Calculator"
    }
}