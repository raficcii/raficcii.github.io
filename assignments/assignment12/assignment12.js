const yesButton = document.querySelector('.yes-button').addEventListener('click', yes);
const noButton = document.querySelector('.no-button').addEventListener('click', no);
const viewButton = document.querySelector('.view-button').addEventListener('click', viewNumber);

const output = document.querySelector('.output');
let outputInt = parseInt('output.textContent');
console.log(outputInt);

function random(){
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random()*(max-min+1)) + min;
    return num;
}
function yes(){
    alert("Your number is " + output.textContent);
}

function no(){
    random();
}

function viewNumber(){
    alert("The current number is " + output.textContent)
}
