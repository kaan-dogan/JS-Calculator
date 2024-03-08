let operationText = ``
let decimal_ = false
let number
let operation
let num1, num2
let result_
function one(){
    operationText += "1"
    document.getElementById(`output`).textContent= operationText
}
function two(){
    operationText += "2"
    document.getElementById(`output`).textContent=operationText
}
function three(){
    operationText += "3"
    document.getElementById(`output`).textContent=operationText
}
function four(){
    operationText += "4"
    document.getElementById(`output`).textContent=operationText
}
function five(){
    operationText += "5"
    document.getElementById(`output`).textContent=operationText
}
function six(){
    operationText += "6"
    document.getElementById(`output`).textContent=operationText
}
function seven(){
    operationText += "7"
    document.getElementById(`output`).textContent=operationText
}
function eight(){
    operationText += "8"
    document.getElementById(`output`).textContent=operationText
}
function nine(){
    operationText += "9"
    document.getElementById(`output`).textContent=operationText
}
function zero(){
    if(operationText != ""){
        operationText += "0"
        document.getElementById(`output`).textContent=operationText
    }
    else{document.getElementById(`output`).textContent="0"}
    
}
function decimal(){
    if(decimal_ != true){
        if(operationText === ""){
            operationText += "0."
        }
        else{operationText += "."}
        decimal_ = true
        document.getElementById(`output`).textContent=operationText
    }
}
function clearDisplay(){
    operationText = ``
    decimal_ = false
    num1 = undefined
    num2 = undefined
    document.getElementById(`output`).textContent=`0`
}
function negative(){
    number = parseFloat(operationText)
    number *= -1
    operationText = number.toString()
    document.getElementById(`output`).textContent=operationText
}
function percentage(){
    number = parseFloat(operationText)
    number *= 100
    operationText = number.toString()
    document.getElementById(`output`).textContent=operationText
}
//operations
function add(){
    if(num1 === undefined){
        operation = "add"
        document.getElementById(`plus`).style.backgroundColor="#ffbe57"
        num1 = parseFloat(operationText)
        operationText = ``
        document.getElementById(`output`).textContent=`0`
    }
    else{
        result()
    }
}
function substract(){
    if(num1 === undefined){
        operation = "substract"
        document.getElementById(`minus`).style.backgroundColor="#ffbe57"
        num1 = parseFloat(operationText)
        operationText = ``
        document.getElementById(`output`).textContent=`0`
    }
    else{
        result()
    }
}
function multiply(){
    if(num1 === undefined){
        operation = "multiply"
        document.getElementById(`multiply`).style.backgroundColor="#ffbe57"
        num1 = parseFloat(operationText)
        operationText = ``
        document.getElementById(`output`).textContent=`0`
    }
    else{
        result()
    }
}
function divide(){
    if(num1 === undefined){
        operation = "divide"
        document.getElementById(`divide`).style.backgroundColor="#ffbe57"
        num1 = parseFloat(operationText)
        operationText = ``
        document.getElementById(`output`).textContent=`0`
    }
    else{
        result()
    }
}
function result(){
    var operatorButtons = document.getElementsByClassName("operator");
    for (var i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = "#ff9f0c";
    }
    if(operationText === undefined){
        operationText = 0
    }
    if(num1 != undefined){

        num2 = parseFloat(operationText)

        if(operation === "add"){
        result_ = num1 + num2
        }
        else if(operation === "substract"){
            result_ = num1-num2
        }
        else if(operation === "divide"){
            result_ = num1/num2
        }
        else if(operation === "multiply"){
            result_ = num1*num2
        }

        num1 = undefined
        num2 = undefined
        operationText = result_
        document.getElementById(`output`).textContent=operationText
    }
    else{operationText=operationText}
}