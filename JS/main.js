// Global variables
let pins = 1234;

//Login Validation
function getInput() {
    let pin = document.getElementById("pin").value;
  if (pin == pins) {
    window.location.href = "main.html"
  } else{
    document.getElementById("message").innerHTML= "Pin Is Not Valid"
  }
}

function processLoan() {
    let loan = document.getElementById("loan").value
    let income = document.getElementById("income").value
    let history = document.getElementById("history").value
    let deposit = document.getElementById("deposit").value
    let collection = document.getElementById("collection").value
    let repayment = document.getElementById("repayment").value
    let type = document.getElementById("type").value
    let score = 0
    let acc = type.toLowerCase()
    let current = "current account"
    let save = "savings account"
    if (loan  === ""){
        document.getElementById("invalid1").innerHTML = "Please Enter A Valid Input"
    }

    if (income === ""){
        document.getElementById("invalid2").innerHTML = "Please Enter A Valid Input"
    }

    if (history === ""){
        document.getElementById("invalid3").innerHTML = "Please Enter A Valid Input"
    }

    if (deposit === ""){
        document.getElementById("invalid4").innerHTML = "Please Enter A Valid Input"
    }

    if (collection === ""){
        document.getElementById("invalid5").innerHTML = "Please Enter A Valid Input"
    }

    if (repayment === ""){
        document.getElementById("invalid6").innerHTML = "Please Enter A Valid Input"
    }

    if (type === ""){
        document.getElementById("invalid7").innerHTML = "Please Enter A Valid Input"
    }

    if (income >= loan) {
        score += 10
    }else{
        score -= 10
    }
    if (history >= 6) {
        score += 10
    }else{
        score -= 10
    }
    if (deposit >= 1) {
        score += 5
    }else{
        score -= 5
    }
    if (collection > 6) {
        score += 10
    }else{
        score -= 10
    }
    if (repayment < 6) {
        score += 10
    }else{
        score -= 10
    }
    if (acc === current) {
        score += 10
    }else if(acc === save){
        score -= 10
    }
    

    if (score >= 30) {
        window.location.href = "accept.html"
    
    }else if (score == -5){

    }else if (score >= -45){
        window.location.href = "reject.html"
    }

    console.log(score)
}

