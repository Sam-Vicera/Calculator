window.onload = init

function init(){
    document.getElementById("AddBtn").onclick = onAddBtnClicked;
    document.getElementById("SubtractBtn").onclick = onSubBtnClicked;
    document.getElementById("MultiplyBtn").onclick = onMultiplyBtnClicked;
    document.getElementById("DivideBtn").onclick = onDivBtnClicked;
   
}

function calculate(operation){
    let userAnswerOne = parseFloat(document.getElementById("Number1").value);
    let userAnswerTwo = parseFloat(document.getElementById("Number2").value);
    let response = 0;
    switch (operation){
        case "+":
            response = userAnswerOne + userAnswerTwo;
            
            break;
        case "-":
            response = userAnswerOne - userAnswerTwo;
            
            break;
        case "*":
            response = userAnswerOne * userAnswerTwo;
          
            break;
        case "/":
            response = userAnswerOne / userAnswerTwo;
           
            break;
        
    }

    document.getElementById("Answer").value = response;

}

function onAddBtnClicked(){
 calculate("+");
}

function onSubBtnClicked(){
    calculate("-");
}
function onMultiplyBtnClicked(){
    calculate("*");
}
function onDivBtnClicked(){
  calculate("/");
  
}