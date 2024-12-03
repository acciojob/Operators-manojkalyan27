//your JS code here. If required.
const changeText = document.querySelector("#change_text");

changeText.addEventListener('click',()=>{
    const originalText = document.querySelectorAll(".division");
    let arr = ['Bye','Good Bye','To','Your','Class'];
    originalText.forEach((item,index)=>{
        item.textContent = arr[index];
    })    
});


const operation = document.querySelector('#calculate');

operation.addEventListener('click',()=>{
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    const operator = document.getElementById("operator").value;

    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    } else {
      result = "Invalid operator";
    }

    document.getElementById("result").innerText = `${result}`;
})