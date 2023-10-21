window.onload = init

function init(){
    let addBtn = document.getElementById("AddBtn")
    addBtn.onclick = onAddBtnClicked
    
    let subBtn = document.getElementById("SubtractBtn")
    subBtn.onclick = onSubBtnClicked
    
    let multiplyBtn = document.getElementById("MultiplyBtn")
    multiplyBtn.onclick = onMultiplyBtnClicked
    
    let divBtn = document.getElementById("DivideBtn")
    divBtn.onclick = onDivBtnClicked
}

function onAddBtnClicked(){
    let userAnswerOne = parseFloat(document.getElementById("Number1").value);
    let userAnswerTwo = parseFloat(document.getElementById("Number2").value)
    
    let userAnswer = userAnswerOne + userAnswerTwo;
    
    
    
    let answerElement = document.getElementById("Answer");

    answerElement.innerText = userAnswer;
}
function onSubBtnClicked(){
    let userAnswerOne = parseFloat(document.getElementById("Number1").value);
    let userAnswerTwo = parseFloat(document.getElementById("Number2").value)
    
    let userAnswer = userAnswerOne - userAnswerTwo;
    
    let answerElement = document.getElementById("Answer");

    answerElement.innerText = userAnswer;
}
function onMultiplyBtnClicked(){
    let userAnswerOne = parseFloat(document.getElementById("Number1").value);
    let userAnswerTwo = parseFloat(document.getElementById("Number2").value)
  
    let userAnswer = userAnswerOne * userAnswerTwo;
    
    let answerElement = document.getElementById("Answer");

    answerElement.innerText = userAnswer;
}
function onDivBtnClicked(){
    let userAnswerOne = parseFloat(document.getElementById("Number1").value);
    let userAnswerTwo = parseFloat(document.getElementById("Number2").value)
    
    let userAnswer = userAnswerOne / userAnswerTwo;
    
    let answerElement = document.getElementById("Answer");

    answerElement.innerText = userAnswer;
}